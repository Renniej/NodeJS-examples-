var fs = require('fs');


//Loads file contents into Variable
/* var ReadMe  = fs.readFileSync('readMe.txt', 'utf8'); //Sync means if there is any code underneath this then it will not run till this function is done
 fs.writeFileSync('writeMe.txt', ReadMe); */


/*fs.readFile('readMe.txt', 'utf8', function(err, data){

         fs.writeFileSync('writeMe.txt', data);

 }); */




//fs.unlinkSync('writeMe.txt'); //delete file

//fs.mkdirSync('stuff'); //Creates folder

/*fs.mkdir('stuff', function(){  //Making folder sync way

    fs.readFile('readMe.txt', 'utf8' , function(err,data) {

        fs.writeFile('./stuff/writeMe.txt', data, function(err, result){
            if (err){
                console.log('error', err)
            }
        });
    });

}); */


fs.unlink('./stuff/WriteMe.txt', function(err, result){ //delete file

    fs.rmdir('stuff', function(err, result){ //delete folder.  Not folder can not be deleted unless it is empty.

        if (err){
            console.log('error', err);
        }


    });



});
