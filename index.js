// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const fs = require('fs');
var zip = new require('node-zip')();
const app = express()
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});
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



app.post('/upload/*', (request, response) => {
    let fileName = "static/filestorage/" + request.url.substr(8);

    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        let base64Data = body.replace(/^data:.*;base64,/, "");
        fs.writeFile(fileName, base64Data, 'base64', function(err) {
            if (err) console.log(err);
        });

        console.log("File saved: " + fileName);
        response.sendStatus(200);
		
		/*response.render('<img src="'+'/filestorage/'+fileName+'"' +' width = 100px >')*/
    });
})

app.post('/loader', urlencodedParser,(request, response) => {
	

    if(!request.body) return response.sendStatus(400);
    console.log(request.body.someText);
  
	
	
	zip.file('index.html', fs.readFileSync(path.join(__dirname, 'static/ziptest/index.html')));
	zip.file('testsuper.css', fs.readFileSync(path.join(__dirname, 'static/ziptest/testsuper.css'))+"alert('request.body.someText')");
	zip.file('testsuper.js', fs.readFileSync(path.join(__dirname, 'static/ziptest/testsuper.js'))+request.body.someText);
	zip.file('arrow.svg', fs.readFileSync(path.join(__dirname, 'static/ziptest/arrow.svg')));
	var data = zip.generate({ base64:false, compression: 'DEFLATE' });
	fs.writeFileSync('test.zip', data, 'binary');
	/*console.log("File saved: " + fileName);*/

	
	
	
}
)

/*app.get('/loader', urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
  response.send(`${request.body.someText}`);
});*/
	
	
	

	