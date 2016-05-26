/**
 * Created by Webandcrafts on 5/26/2016.
 */
(function () {
    'use strict';                               // Strict validation done for js

    var express = require('express');           // Require express
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/mean');

    var Schema = mongoose.Schema;

    var movieSchema = new Schema({
        "name": {
            type: String,
            required: true
        }
    });



    var movieModel = mongoose.model('mine',movieSchema)

    //var movie = new movieModel({'name':"binoop"});
    //movie.save();

    movieModel.find({},function(err,movies){
       console.log(err);
       console.log(movies);
    })

    // Create App
    var routes = express();

    // Home Routes
    routes.get('/', function (request, response) {
        response.send('Hello World!');
    });

    routes.get(/a/, function (request, response) {
        response.send('Hello sWorld!');
    });

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
    routes.use('/static', express.static('public'));
})();

