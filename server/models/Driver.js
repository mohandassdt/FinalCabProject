var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var driverSchema = mongoose.Schema({
    Email:String,
    Did:String,
    FirstName:String,
    age:String,
   licence:String,
   Password:String,
   Car:String,
  carNo:String,
  drtype:String,
   MobileNumber:String

   });

driverSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

driverSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.Password);

}

module.exports = mongoose.model('Driver', driverSchema, 'Driver');
