'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema
const schema = new Schema({
  name: String
})

module.exports = mongoose.model('Kanban', schema)
