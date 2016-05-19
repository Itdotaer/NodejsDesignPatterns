var fs = require('fs');
var cache = {};

function consistentReadSync(fileName){
    if(cache[fileName]){
        return cache[fileName];
    }else{
        cache[fileName] = fs.readFileSync(fileName, 'utf8');
        
        return cache[fileName];
    }
} 

var data = consistentReadSync('data.txt');

console.log('同步读取数据:' + data);