var fs = require('fs');
function readJSON(fileName, callback){
    fs.readFile(fileName, 'utf8', function(err, data){
        var parsed;
        if(err){
            // 抛出错误
            return callback(err);
        }
        
        try {
            // 处理数据
            parsed = JSON.parse(data);
        } catch (err) {
            // 捕获转换错误
            return callback(err);
        }
        
        // 没有错误， 则只返回处理数据
        callback(null, parsed);
    });
}

readJSON('json.txt', function(err, data){
    if(err){
        console.log('Error:' + err);
    }else{
        console.log('Parsed JSON: \n { \n Name:' + data.name + '\n Age:' + data.age + '\n Sex:' + data.sex + '\n }');   
    }
});