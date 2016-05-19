var Logger = require('./exportAConstructorDemo');

var dbLogger = Logger('DB');
dbLogger.info('这是一个基本消息');

var accessLogger = Logger('ACCESS');
dbLogger.verbose('这是一个动作消息');