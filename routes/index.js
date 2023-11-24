var express = require('express');
var router = express.Router();
// var config = require('../config.json');
/* GET home page. */
var title = 'GalexionLink';


const fs = require('fs');


router.post('/', async function (req, res, next) {
    let body = req.body;
    console.log(body);
    res.send(body);
});


router.post('/signin', async function (req, res, next) {
    let body = req.body;
    const data = JSON.parse(fs.readFileSync(__dirname + '/db.json',{ encoding: 'utf8' }));
    let user = await checkDatabase(data,body);
    if (user != undefined) {
        if(user.password == body.password) {
            res.status(200).send({"user":{"username":user.username, "level":user.level}, "method":"signin"})
        } else {
            res.status(401).send({"error":"Error: Password is incorrect.", "method":"signin"}) 
        }
    } else {
        res.status(401).send({"error":"Error: User can't Be Found.", "method":"signin"})
    }
});


router.post('/signup', async function (req, res, next) {
    let body = req.body;
    const data = JSON.parse(fs.readFileSync(__dirname + '/db.json',{ encoding: 'utf8' }));
    let user = await checkDatabase(data,body);
    if (user != undefined) {
        res.status(401).send({"error":"Error: User Already Exists.", "method":"signup"})
    } else {
        if(body.password != null || body.password != "") {
            let newUser = {"username": body.username, "passsword":body.password, "level":1, "id":data[data.length-1].id + 1}
            let newUserClient = {"username": body.username,"level":1, "id":data[data.length-1].id + 1}
            data.push(newUser)
            fs.writeFileSync(__dirname + "/db.json", JSON.stringify(data));
            
            res.status(200).send({"user":newUserClient, "method":"signup"})
        }
    }
});

async function checkDatabase(data, query) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].username + " == " + query.username)
        if (data[i].username == query.username) {
            return data[i];
        }
    }
}

module.exports = router;