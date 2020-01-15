var configValues=require("./config");
module.exports={
    getDbConnectionString: function(){
        var uri=`mongodb+srv://${configValues.username}:${configValues.password}@mongodbc-lfkub.mongodb.net/test1?retryWrites=true`;
        // var uri=`mongodb://localhost/test`;
        // return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0-shard-00-00-hsy2l.mongodb.net:27017/test`;
        // return `mongodb+srv://${configValues.username}:${configValues.password}@mongodbc-shard-00-00-lfkub.mongodb.net:27017/test?retryWrites=true`;
        // mongodb+srv://root:<password>@cluster0-hsy2l.mongodb.net/test?retryWrites=true&w=majority
        // return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0-hsy2l.mongodb.net/test?retryWrites=true&w=majority`;
        return uri;
    }
};
// var mongoose = require('mongoose');
// // var configValues=require("./config");
// //connect to mongodb
// /* mongoose.connect('mongodb://localhost/taskmanagement', {
//     useNewUrlParser: true
// }); */
// mongoose.connect('mongodb+srv://user:user123456@mongodbc-lfkub.mongodb.net/test1?retryWrites=true',{
//   useNewUrlParser: true,  useMongoClient: true 
// });


// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', _ => {
//     console.log('mongodb connected')
// });