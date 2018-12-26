var http = require('http'); //server create module
var fs = require('fs'); //file stream module

var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); //Creates stream in read-only mode & type of encoding for file

//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');  //Create stream in write-only mode


/*myReadStream.on('data', function(chunk){ //Read stream event listener.  Listens for when data is sent off

    console.log('new chunk recieved: ');
    //console.log(chunk);

    myWriteStream.write(chunk);

}); */


/*/Pipe can only be started on readable streams
var server = http.createServer(function(req, res){

    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/html'}); //meta-information about content being sent (status code, content type)
   // resp.end(myReadStream.pipe(myWriteStream)); //Actual content being sent
     myReadStream.pipe(res); //Actual content being sent


}); //Creates server */



var server = http.createServer(function(req,res){

    console.log("Request made: " + req.url);


    if (req.url === '/home' || req.url === '/'){


        res.writeHead(200, {'Content-Type' : 'text/html'});
        myReadStream.pipe(res);

    } else if(req.url === '/contact'){

        res.writeHead(200, {'Content-Type' : 'application/json'})
        
        res.end(JSON.stringify({
            
            name : 'Tai',
            job : 'Unemployed',
            age : 19
        
        
        }));



    }
    else{

        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('404 PAGE NOT FOUND');
    }



    //res.end(JSON.stringify(myObj)); //Sends JSON as a string


});



server.listen(3000,  '127.0.0.1');
console.log('Now listening to port: 3000')



//Buffer = temp storage for small chunks of data to be passed on eventually 
//Stream = stream of data, usually sent in chunks of buffers.  