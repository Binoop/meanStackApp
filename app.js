/**
 * Created by Webandcrafts on 5/26/2016.
 */
(function () {
    'use strict';                               // Strict validation done for js

    var express = require('express');           // Require express
    var mongoose = require('mongoose');

    // DB connection
    mongoose.connect('mongodb://localhost/mean');
    var Schema = mongoose.Schema;


    // Movie Schema
    var movieSchema = new Schema({
        "name": {
            type: String,
            required: true
        }
    });

    // Movie Model
    var movieModel = mongoose.model('mine', movieSchema)


    movieModel.find({}, function (err, movies) {
        console.log(err);
        console.log(movies);
    })

    // Create App
    var routes = express();

    // view engine
    routes.set('view engine', 'ejs');

    // Home Routes
    routes.get('/', function (request, response) {
        response.render('movie/index', {user: 'name Binoop'});
    });

    routes.post('/test-data', function (request, response) {
        var jsonUsers = [{user: 'my pseudonym Montae'},{user: 'who ever i want to be'},{user: 'sometime the dark knight'},{user: 'am a villian or an hero'}];
        response.send(jsonUsers[[Math.floor(Math.random()* jsonUsers.length)]]);
    });

    //routes.get(/a/, function (request, response) {
    //    response.send('Hello sWorld!');
    //});

    // Set up to port to listen.
    routes.listen(2000, function () {
        console.log('Example app listening on port 2000!');
    });

    /**
     * To Load Static Resources
     * param1, optional -> to set a mock route to load static resourse
     * eg : param1 = '/static' ==>  http://localhost:2000/static/public/js/start.js
     * eg : no value passed ==> http://localhost:2000/public/js/start.js
     */
    routes.use(express.static('public'));
    routes.use('/node',express.static('node_modules'));
    routes.use('/views',express.static('views'));
})();

