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
    console.log(request.body.someJS);
	console.log(request.body.someCSS);
  
	var pathname = 'static/ziptest/';
	var file = path.join(__dirname,'app.zip');
	
	zip.file('index.html', fs.readFileSync(path.join(__dirname, pathname +'index.html')));
	zip.file('testsuper.css', fs.readFileSync(path.join(__dirname, pathname +'testsuper.css'))+request.body.someCSS);
	zip.file('testsuper.js', fs.readFileSync(path.join(__dirname, pathname +'testsuper.js'))+request.body.someJS + ';var min = ' + request.body.someTime+';');
	zip.file('next.svg', fs.readFileSync(path.join(__dirname, pathname +'next.svg')));
	zip.file('back.svg', fs.readFileSync(path.join(__dirname, pathname +'back.svg')));
	zip.file('jquery-2.2.4.min.js', fs.readFileSync(path.join(__dirname, pathname +'jquery-2.2.4.min.js')));
	zip.file('jquery-ui.min.js', fs.readFileSync(path.join(__dirname, pathname +'jquery-ui.min.js')));
	zip.file('jquery-ui.css', fs.readFileSync(path.join(__dirname, pathname +'jquery-ui.css')));
	var data = zip.generate({ base64:false, compression: 'DEFLATE' });
	fs.writeFileSync('app.zip', data, 'binary');
	/*console.log("File saved: " + fileName);*/
	
	//response.setHeader('Content-disposition', 'attachment; filename=' + 'app.zip');
	//response.setHeader('Content-type', mime.lookup(__dirname + 'app.zip'));
	response.download(file,'app.zip')/*.then(response.sendStatus(200));
	

	var filestream = fs.createReadStream(__dirname + 'app.zip');
	filestream.pipe(response);*/
	
	
	
}
)



/*app.get('/download', function(req, res){

  var file = __dirname + '/upload-folder/dramaticpenguin.MOV';/

  var filename = path.basename(file);//
  var mimetype = mime.lookup(file);//

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

/*app.get('/loader', urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
  response.send(`${request.body.someText}`);
});*/
	
	
	

	