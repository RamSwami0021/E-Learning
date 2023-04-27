var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const cors = require('cors');

const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/E-Learning',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post('/sign_up',function(req,res){
    // taking a user
    const newuser=new User(req.body);
    
   if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
    
    User.findOne({email:newuser.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});
 
        newuser.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });
 });

app.post('/sign_in', function(req,res){
    let token=req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) return  res(err);
        if(user) return res.status(400).json({
            error :true,
            message:"You are already logged in"
        });
    
        else{
            User.findOne({'username':req.body.username},function(err,user){
                if(!user) return res.json({isAuth : false, message : ' Auth failed ,email not found'});
        
                user.comparepassword(req.body.password,(err,isMatch)=>{
                    if(!isMatch) return res.json({ isAuth : false,message : "password doesn't match"});

            });
          });
        }
    });
});

app.post("/api/contact_form",(req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var message = req.body.message;
    var addtional = req.body.addtional;

    var data = {
        "fname": fname,
        "lname": lname,
        "email" : email,
        "message" : message,
        "addtional": addtional,
    }

    db.collection('ContactUs').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Thank You For Contact Us");
        console.log(data);
    });

    return res.redirect('/')

})
app.post("/api/subscribe",(req,res)=>{
    var email = req.body.email;

    var data = {
        "email" : email,
    }

    db.collection('Subscribe').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Thank You For Subscribe");
        console.log(data);
    });

    return res.redirect('/')

})

const users = [
    { id: 1, username: 'admin1', password: 'admin1' },
    { id: 2, username: 'admin2', password: 'admin2' },
  ];
  
  // Login endpoint
  app.post('/api/login', (req, res) => {
    // Find user with matching username and password
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  
    // Return user data to client
    res.json({ id: user.id, username: user.username });
  });
  
  app.get('/api/contact/list', (req, res) => {
    const collection = db.collection("ContactUs");
    
      // Find all documents in the users collection
      collection.find({}).toArray((err, docs) => {
        res.send(docs);
      });
  });
  
  app.get('/api/subscribe/list', (req, res) => {
    const collection = db.collection("Subscribe");
    
      // Find all documents in the users collection
      collection.find({}).toArray((err, docs) => {
        res.send(docs);
      });
  });
  

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
}).listen(8080);

console.log("Listening on PORT 8080");