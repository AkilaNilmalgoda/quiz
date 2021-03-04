const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    // surname: {
    //     type: String,
    //     required: true
    // },
    country: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    // prevclubs: { 
    //     type: Array
    // },
    achievements: {
        type: Array
    },
    // interests: {
    //     type: Array
    // },

});

module.exports = mongoose.model('profile', ProfileSchema);  