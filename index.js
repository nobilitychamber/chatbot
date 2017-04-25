'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

//Allow data processing

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Declare Routes

app.get('/', function(req, res){

    res.send("Hi i am a chatbot")
})

//Facebook

app.get('/webhook', function(req, res){

    if(req.query['hub.verify_token'] === "nobilitychamber"){
        res.send(rep.query['hub.challenge'])
    }
    res.send("wrong token")
})

//serve side

app.listen(app.get('port'), function(){

    console.log("Running: port")
})