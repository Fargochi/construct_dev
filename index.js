// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('static'))
app.listen(3000)

app.get('/', (request, response) => {
    if (request.query.app === 'test') {
        response.render('test', {
            key: 'you could put any variables here'
        })
    } else if (request.query.app === 'memory') {
        response.render('memory', {
            a: '1',
            b: '2'
        })
    } else {
        response.render('home', {
            program: 'Trello'
        })
    }

})