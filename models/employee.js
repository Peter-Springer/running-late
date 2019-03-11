const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  name: String,
  status: String,
  phoneNumber: String
})

exports.Employee = mongoose.model('Employee', employeeSchema)
