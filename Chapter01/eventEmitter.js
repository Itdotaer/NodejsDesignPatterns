const EventEmitter = require('events');
const fs = require('fs');

module.exports = function(files, regex){
    var emitter = new EventEmitter();
    
    files.forEach(function(file){
        fs.readFile(file, 'utf8', function(err, content){
            if(err){
                return emitter.emit('err', err);
            }
            
            emitter.emit('fileread', file);
            var match = null;
            if(match = content.match(regex)){
                match.forEach(function(elem){
                    emitter.emit('found', file, elem);
                });
            }
        });
    });
    
    return emitter;
}