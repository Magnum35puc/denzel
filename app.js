const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://UserRWDenzel:admin@denzelcluster-r0xwq.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Movies";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

var port = 9292;

app.listen(port, () => {
     MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

console.log('library list RESTful API server started on: ' + port);