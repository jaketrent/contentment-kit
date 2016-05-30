const koa = require('koa')
const static = require('koa-static')

const app = koa()
const port = process.env.PORT || 3001

app.use(static(__dirname))

app.listen(port)
console.log(`Listening on port ${port}`)
