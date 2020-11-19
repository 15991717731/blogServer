let mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/blog';

mongoose.connect(url, { userNewUrlParser: true}, function(err, ) {
    if(err) throw err;
    console.log('数据库已创建');
})

module.exports = mongoose;