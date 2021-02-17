const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    // questions: {
    //     type: Array,
    //     required: true,
    // },
    items:Array,
    
    date: {
        type: String,
        default: Date.now()
    },
});
  
module.exports = mongoose.model('session', SessionSchema);  