const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 
var db;

const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs');

MongoClient.connect("mongodb+srv://chlwlsdnr12345:wlsdnr24680@cluster0.usngeab.mongodb.net/test", function(err, client){  if (err) return console.log(err)
     db = client.db('mongodb');

    console.log('DB connected')

  app.listen(8080, function() {
    console.log('listening on 8080')
  })
})



app.get('/', function(req, res) { 
  res.sendFile(__dirname +'/index.html')
  })

app.get('/login', function(req, res) {
    res.sendFile(__dirname +'/login.html')
  })

app.get('/list', function(req, res) {
  db.collection('login').find().toArray(function(err, result){
    console.log(result);
    res.render('list.ejs', {loginfo : result})
  })
})

app.post('/warning', function(req, res){
  db.collection('config').findOne({name : 'totalcount'}, function(err, result){
    var mycount = result.count;
    db.collection('login').insertOne( { _id : (mycount + 1), email : req.body.email, password : req.body.password } , function(){
      db.collection('config').updateOne({name:'totalcount'},{ $inc: {count:1} },function(err, result){
        if (err) return console.log(err)
        console.log('save complete')
        res.sendFile(__dirname+'/warning.html');
      });  
    });
  });
 
});

app.post('/main', function(req, res) {
  res.sendFile(__dirname +'/main.html')
})

app.get('/department/one', function(req, res) {
  res.sendFile(__dirname +'/department/one.html')
})

app.get('/department/two', function(req, res) {
  res.sendFile(__dirname +'/department/two.html')
})

app.get('/department/three', function(req, res) {
  res.sendFile(__dirname +'/department/three.html')
})

app.get('/department/four', function(req, res) {
  res.sendFile(__dirname +'/department/four.html')
})

app.get('/department/five', function(req, res) {
  res.sendFile(__dirname +'/department/five.html')
})

app.get('/department/seven', function(req, res) {
  res.sendFile(__dirname +'/department/seven.html')
})

app.get('/department/eight', function(req, res) {
  res.sendFile(__dirname +'/department/eight.html')
})

app.get('/department/nine', function(req, res) {
  res.sendFile(__dirname +'/department/nine.html')
})

app.get('/department/ten', function(req, res) {
  res.sendFile(__dirname +'/department/ten.html')
})

app.get('/department/eleven', function(req, res) {
  res.sendFile(__dirname +'/department/eleven.html')
})

app.get('/department/thirteen', function(req, res) {
  res.sendFile(__dirname +'/department/thirteen.html')
})

app.get('/department/fourteen', function(req, res) {
  res.sendFile(__dirname +'/department/fourteen.html')
})

app.get('/department/sixteen', function(req, res) {
  res.sendFile(__dirname +'/department/sixteen.html')
})

app.get('/department/eighteen', function(req, res) {
  res.sendFile(__dirname +'/department/eighteen.html')
})

app.get('/department/twentyone', function(req, res) {
  res.sendFile(__dirname +'/department/twentyone.html')
})

app.get('/department/twentytwo', function(req, res) {
  res.sendFile(__dirname +'/department/twentytwo.html')
})

app.get('/department/twentythree', function(req, res) {
  res.sendFile(__dirname +'/department/twentythree.html')
})

app.get('/department/thirtyone', function(req, res) {
  res.sendFile(__dirname +'/department/thirtyone.html')
})

app.get('/reservation', function(req, res) {
  res.sendFile(__dirname +'/reservation.html')
})