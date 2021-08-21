const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   firstName: {
       type: String,
       required: true,
       trim: true,
   },
   lastName: {
        type: String,
        required: true,
        trim: true,
   },
   middleName: {
       type: String,
       trim: true,
   },
   email: {
       type: String,
       required: true,
       trim: true,
       validate(value){
           if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
               throw new Error('Email is not valid.');
           }
       }
   },
   country: {
       type: String,
       required: true,
       trim: true,
   },
   province: {
       type: String,
       required: true,
       trim: true,
   },
   city: {
       type: String,
       required: true,
       trim: true
   },
    timestamps: true,
});

module.exports = mongoose.model("userInfo", userSchema);