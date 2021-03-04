const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const sendResetMail = require("../extras/sendMail")
const { v4: uuidv4 } = require("uuid");

//@route  GET api/auth
//@desc   Get logged in user
//@acess  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route  POST api/auth
//@desc   Auth user & get token
//@acess  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//Post Testing

//@route  PUT api/auth/forgot
//@desc   Reset Password for forgot
//@acess  Public

router.put(
  '/test', async(req, res) => {
  
   const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const id = uuidv4();
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(id, salt);

      const userPassword = await User.findByIdAndUpdate(
        { _id: user._id },
        {
          password: password,
        }
      );
      sendResetMail(user.email, id);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error-Forgot");
  }
  }
);

//@route  PUT api/auth
//@desc   Update User Passsword
//@acess  Private

router.put("/:id", auth, async (req, res) => {
  const { password, newpassword } = req.body;

  //Build password update object
  const passwordUpdateFields = {};
  if (password) passwordUpdateFields.oldpassword = password;
  if (newpassword) passwordUpdateFields.password = newpassword;

  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(
      passwordUpdateFields.oldpassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({ msg: "Current Password Invalid" });
    }

    const salt = await bcrypt.genSalt(10);

    const password = await bcrypt.hash(passwordUpdateFields.password, salt);

    const userPassword = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        password: password,
      }
    );

    // Importanat!!!! add check user

    return res.json(userPassword);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error - Password");
  }
});

//@route  PUT api/auth/forgotpasword
//@desc   Forgot password
//@acess  Private

// router.post("/forgotpassword", async (req, res) => {

//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       res.json("User Found");
//     }
    
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

module.exports = router;
