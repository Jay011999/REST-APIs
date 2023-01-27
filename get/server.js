const express = require('express')
const bodyParser=require('body-parser')
var app=express();
const port = 3000
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/api",{
   useNewUrlParser:true
});

const aticleSchema=new mongoose.Schema({
   name:String,
   title:String
});

const Article=mongoose.model("api",aticleSchema);
// const todo=new Article({
//    name:"java",
//    title:"Good language"
// })
// todo.save()

// const todo1=new item({
//    name:"Go and run"
// })
// const todo2=new item({
//    name:"wakeup early"
// })
// const todo3=new item({
//    name:"learn new techs"
// })
// const todo4=new item({
//    name:"enjoy as much as u can"
// })


// // todo1.save();
// // todo2.save();
// // todo3.save();
// // todo4.save();


app.get('/articles',function(req,res){
   Article.find(function(err,found){
      if(err){
         console.log(err);
      }else{
         console.log(found);
         res.send(found);
      }
   })
})


app.listen(port,function(){
        console.log("server started")
})