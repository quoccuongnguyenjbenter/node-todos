var mongoose=require("mongoose");
// mongoose.Promise = global.Promise;
var Schema=mongoose.Schema;
var todoSchema=new Schema({
  text: String,
  isDone: String
});
var Todos=mongoose.model("Todos",todoSchema);

module.exports=Todos;