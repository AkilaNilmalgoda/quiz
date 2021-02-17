const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')
const User = require('../models/User');
const Profile = require('../models/Profile')

//@route  GET api/profile 
//@desc   Get user profile
//@access  Private

router.get('/', auth, async(req,res) => {
    try {
        const profile = await Profile.find({user: req.user.id}).sort({date:-1});
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// router.get('/', (req,res) => {
//     res.send('Get user Profile')
// })

//@route  POST api/profile
//@desc   Add field
//@access  Private

router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, surname, country, club, prevclubs, achievements, interests} =req.body;

    try{
        const newProfile = new Profile({
            name,
            surname, 
            country, 
            club,  
            prevclubs,
            achievements,
            interests,
            user: req.user.id
        });
        const profile = await newProfile.save();

        res.json(profile);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// router.post('/', (req,res) => {
//     res.send('Add user Profile')
// })

//@route  PUT api/profile:id
//@desc   Update profile
//@access  Private

router.put('/:id', auth, async (req, res) => {
    const {name, surname, country, club, prevclubs, achievements, interests} =req.body;

    //Build profile object
    const profileFields = {};
    if (name) profileFields.name = name;
    if (surname) profileFields.surname = surname;
    if (country) profileFields.country = country;
    if (club) profileFields.club = club;
    if (prevclubs) profileFields.prevclubs = prevclubs;
    if (achievements) profileFields.achievements = achievements;
    if (interests) profileFields.interests = interests;

    

    try {
        let profile = await Profile.findById(req.params.id)

        if(!profile) return res.status(404).json({msg: 'Profile not found'});

        //Make sure user owns profile

        if(profile.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'});
        }

        profile = await Profile.findByIdAndUpdate(req.params.id, 
            {$set: profileFields},
            {new:true});

            res.json(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// router.put('/', (req,res) => {
//     res.send('Update Profile')
// })

module.exports = router;