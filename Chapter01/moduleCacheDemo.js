var http = require('http');
console.log('Loaded Http Core Module:' + require.cache);
var fs = require('fs');
console.log('Loaded fs Core Module:' + require.cache['fs']);
var path = require('path');
console.log('Loaded path Core Module:' + require.cache);