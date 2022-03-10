/*const express = require('express');
const app = express()
const data = require("../data.json")


app.use(express.json());*/
/*///////////////////////////////////////
GET ALL USER
//////////////////////////////////////*/
/*app.get("/clients", function(req, res){
    res.json(data)
});*/
/*///////////////////////////////////////
GET USER BY ID AND USERNAME
//////////////////////////////////////*/
/*app.get("/clients/:id/:username", function(req, res){
    const { id } = req.params
    const { username } = req.params
    const client = data.find(cli => cli.id == id && cli.username == username)

    if (!client) return res.status(204).json();

    res.json(client)
});*/
/*///////////////////////////////////////
ADD USER BY POST USER
//////////////////////////////////////*/
/*app.post("/clients", function(req, res){
    const { name, email } = req.body;

    console.log(name, email," SALVO")

    res.json({name, email});
});*/
/*///////////////////////////////////////
ATT USER BY PUT USER
//////////////////////////////////////*/
/*app.put("/clients/:id", function(req, res){
    const { id } = req.params
    const client = data.find(cli => cli.id == id )
    if (!client) return res.status(204).json();

    const { name } = req.body;
    client.name = name

    res.json(client);
});*/
/*///////////////////////////////////////
DELETE USER BY DELETE USER
//////////////////////////////////////*/
/*app.delete("/clients/:id", function(req, res){
    const { id } = req.params
    const clientsFiltered = data.filter(client => client.id != id)

    res.json(clientsFiltered)
});



app.listen(3000, function(){
    console.log('server is running')
})*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./app/controllers/index')(app);

app.listen(3000);