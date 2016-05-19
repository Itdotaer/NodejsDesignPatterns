// const findPattern = require('./eventEmitter');
// findPattern(['fileA.txt', 'fileB.json'], /hello \w+/g)
//     .on('fileread', function(file){
//         console.log(file + ' was read');
//     })
//     .on('found', function(file, match){
//         console.log('Matched "' + match + '" in file ' + file);
//     })
//     .on('err', function(err){
//         console.log('Error emitted: ' + err.message);
//     });
 
 var FindPattern = require('./findPattern');
 
 var findPattern = new FindPattern(/hello \w+/g);
 
 findPattern
    .addFile('fileA.txt')
    .addFile('fileB.json')
    .find()
    .on('fileread', function(file){
        console.log(file + ' was read');
    })
    .on('found', function(file, match){
        console.log('Matched "' + match + '" in file ' + file);
    })
    .on('error', function(err){
        console.log('Error emitted: ' + err.message);
    });