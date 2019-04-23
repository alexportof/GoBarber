const express = require('express')
const nunjucks = require('nunjucks')
const path = class App {
  constructor () {
    this.express = express()
    this.isDev = process.eventNames.NODE_ENV !== 'production'
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
  }
  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'))
  }
  routes () {}
}
