const mongoose = require('mongoose');



const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter name']
    },
    email:{
        type:String,
        required:[true,'Please enter email'],
        unique:[true,'This email is already assigned'],
    },
    password:{
        type:String,
        required:[true,'PLease enter the password']
    },
  
})

module.exports = mongoose.model('Users',UserSchema);

