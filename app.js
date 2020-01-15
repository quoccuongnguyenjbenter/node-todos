var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config=require("./config");
var mongoose=require("mongoose");
// var mongoose=require('mongodb').MongoClient;


var setupController=require("./api/controllers/setupController");
var todoController=require("./api/controllers/todoController");

var app = express();
// var port = process.evn.Port || 3000;
var post = process.env.POST || 3000;

// mongoose.connect("mongodb+srv://root:Trang929670!@cluster0-shard-00-01-hsy2l.mongodb.net:27017/test");
// var Schema=mongoose.Schema;
// var personSchema=new Schema({
//   firstName: String,
//   lastName: String,
//   address: String
// });
// var Person=mongoose.model("Person",personSchema);
  


app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use("/",function(req,res,next){
//   var hoa=Person({
//     firstName: "Hoa",
//     lastName: "Mai",
//     address:"Đông Anh"
//   });
//   hoa.save(function(err){
//     if(err) throw err;
//     console.log("Hoa is created ....");
    
//   });
// });
app.use(morgan("dev"));

app.set("view engine", "ejs");

// console.log(config.getDbConnectionString());
// mongoose.Promise = global.Promise;
// mongoose.Promise = require('bluebird');
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });
// require('./config/index');
setupController(app);
todoController(app);
// mongoose.connect(config.getDbConnectionString(),{useNewUrlParser:true},function(err,client){
//   const collection=client.db("Todos").collection("seedTodos");
//   console.log("connected");
//   setupController(app);
// });

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(post, function() {
  console.log("App listening on port: " + post);

});
