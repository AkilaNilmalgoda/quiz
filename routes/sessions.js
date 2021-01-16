const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')
const User = require('../models/User');
const Session = require('../models/Session')

//@route  GET api/sessions
//@desc   Get all users sessions
//@acess  Private
router.get('/', auth, async (req, res) => {
    try {
        const sessions = await Session.find({user: req.user.id}).sort({date: -1});
        res.json(sessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  POST api/sessions
//@desc   Add new session
//@acess  Private
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, questions} =req.body;

    try{
        const newSession = new Session({
            name,
            questions,
            user: req.user.id
        });
        const session = await newSession.save();

        res.json(session);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

//@route  PUT api/sessions:id
//@desc   Update a session
//@acess  Private
router.put('/:id', auth, async (req, res) => {
    const {name, questions} =req.body;

    //Build session object
    const sessionFields = {};
    if (name) sessionFields.name = name;
    if (questions) sessionFields.questions = questions;

    try {
        let session = await Session.findById(req.params.id)

        if(!session) return res.status(404).json({msg: 'Session not found'});

        //Make sure user owns session

        if(session.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'});
        }

        session = await Session.findByIdAndUpdate(req.params.id, 
            {$set: sessionFields},
            {new:true});

            res.json(session)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

//@route  DELETE api/sessions:id
//@desc   Delete a session
//@acess  Private
router.delete('/:id',auth, async (req, res) => {
    try {
        let session = await Session.findById(req.params.id)

        if(!session) return res.status(404).json({msg: 'Session not found'});

        //Make sure user owns session

        if(session.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'});
        }

        await Session.findByIdAndRemove(req.params.id);

            res.json({msg: 'Contact removed'})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;