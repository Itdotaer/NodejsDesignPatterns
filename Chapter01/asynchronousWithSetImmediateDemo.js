var fs = require('fs');
var cache = {};

function inconsistentRead(fileName, callback){
    if(cache[fileName]){
        setImmediate(function(){
            callback(cache[fileName]);
        });
    }else{
        fs.readFile(fileName, 'utf8', function(err, data){
            cache[fileName] = data;
            callback(data);
        });
    }
}

function createFileReader(fileName){
    var listeners = [];
    
    inconsistentRead(fileName, function(data){
        listeners.forEach(function(listener){
            listener(data);
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
    console.log('第一次触发读取data.txt文件:' + data);
    
    var reader2 = createFileReader('data.txt');
    reader2.onDataReady(function (data) {
        console.log('第二次触发读取data.txt文件:' + data);
    })
});