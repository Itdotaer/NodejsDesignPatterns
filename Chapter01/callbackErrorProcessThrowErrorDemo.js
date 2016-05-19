var fs = require('fs');
function readJSONThrows(fileName, callback){
    fs.readFile(fileName, 'utf8', function(err, data){
        var parsed;
        if(err){
            // 抛出错误
            return callback(err);
        }
        
        // 没有错误， 返回
        callback(null, JSON.parse(data));
    });
}

process.on('uncaughtException', function(err){
    console.log('未捕获的异常错误:' + err.message);
    process.exit(1);
});

readJSONThrows('json.txt', function(err, data){
    if(err){
        console.log('Error:' + err);
    }else{
        console.log('Parsed JSON: \n { \n Name:' + data.name + '\n Age:' + data.age + '\n Sex:' + data.sex + '\n }');   
    }
});


