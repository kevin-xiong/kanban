'use strict'

const mongoose = require('mongoose')
const config = require('../config/default')

mongoose.Promise = global.Promise
mongoose.connect(config.db, {
  poolSize: 20
}, (err) => {
  /* istanbul ignore if */
  if (err) {
    console.error('connect to %s error: ', config.db, err.message)
    process.exit(1)
  }
})

module.exports = {
  User: require('./user'),
  Kanban: require('./kanban'),
}
