var fs = require('fs');

var cache = {};
function inconsistentRead(fileName, callback){
    if(cache[fileName]){
        // 触发同步
        callback(cache[fileName]);
    }else{
        // 异步操作
        fs.readFile(fileName, 'utf8', function(err, data){
            cache[fileName] = data;
            callback(data);
        });
    }
}

function createFileReader(fileName) {
    var listeners = [];
    
    inconsistentRead(fileName, function(value){
        listeners.forEach(function(listener){
            listener(value);
        });
    });
    
    return {
        onDataReady: function(listener){
            listeners.push(listener);
        }
    };
}

var reader1 = createFileReader('data.txt');
reader1.onDataReady(function(data){
    console.log('First time to call data:' + data);
    
    var reader2 = createFileReader('data.txt');
    reader2.onDataReady(function(data){
        console.log('Second time to call data:' + data);
    });
});