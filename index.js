require('dotenv').config()
const Express = require('express')
const db = require('./db')
const app = Express()

const controllers = require('./controllers')

app.use(Express.json())

app.use('/', controllers.family)

db.authenticate()
  .then(() => db.sync())
  // .then(() => db.sync({force: true}))
  .then(() => {
    app.listen(process.env.PORT, console.log(`[server]: listening on localhost:${process.env.PORT}`))
  })
  .catch(err => {
    console.log('[server]: Server Crashed')
    console.log(err)
  })