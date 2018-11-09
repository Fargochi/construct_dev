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
    /*
    response.render('home', {
        name: 'John'
    })
    */
    response.render('changeme', {
        program: 'Trello'
    })

})