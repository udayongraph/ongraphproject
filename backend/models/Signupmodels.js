const mongoose=require('mongoose');

const signUpTempelate=new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    email:{
            type:String,
            required:true,
            unique:true
    },
    Password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('user_details',signUpTempelate)
