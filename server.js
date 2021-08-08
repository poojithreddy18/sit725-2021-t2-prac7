require('dotenv').config()
var express = require("express")
var app = express()
const MongoClient = require('mongodb').MongoClient;
let projectCollection;

const uri = "mongodb+srv://sit725-2021-t2-prac4:Poojith@sit725-2021-t2-prac4.lnldy.mongodb.net/sit725-2021-t2-prac4?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true})

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
} 

const cardList = [

]

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message:err})
        }
        else {
             res.json({statusCode: 200, message:"Success", data: result})
        }
     })
})

app.post('/api/projects',(req,res) => {
    console.log("New Project add", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
      }
        else {
            res.json({statusCode: 200, message:"Project has Successfully placed", data: result})
        }
     })
})

var port = process.env.port || 5000;

app.listen(port, () => {
    console.log("App listening to: " + port);
    createColllection("New country")
})