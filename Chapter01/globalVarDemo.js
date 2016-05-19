function localVarFunc(){
    var name = 'harry';
    
    global.name = 'test';
}

localVarFunc();

console.log('Global demo: \n local func name: ' + name + '\n global var name: ' + global.name);