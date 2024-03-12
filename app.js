const express=require('express');
const ejs=require('ejs');
let minitues=25;

const app=express();

app.use(express.static("public"));
app.set('view engine','ejs');


app.get('/',function(req,res){
    minitues=25;
res.render('home',{minitues:minitues,route:'/'});
});

app.get('/shortBreak',function(req,res){
minitues=5;
res.render('home',{minitues:minitues,route:'/shortBreak'})
});

app.get('/longBreak',function(req,res){
    minitues=10;
    res.render('home',{minitues:minitues})
    });

app.listen(3000,function(){
    console.log('listen to port number 3000');
})