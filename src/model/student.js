const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        // max:12,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }


});

const student = new mongoose.model("Student",studentSchema);
module.exports = student;