var express = require('express'),
    config = require('./config.js'),
    path = require('path'),
    yelp = require('yelp').createClient({
        consumer_key: config.ck, 
        consumer_secret: config.cs,
        token: config.t,
        token_secret: config.ts
    })

app = express();

app.use("/app", express.static(path.join(__dirname, '/app')))
app.use("/bower_components", express.static(path.join(__dirname, '/bower_components')))

app.route('/find').get(function(req, res){
    console.log("lat " + req.query.lat)
    console.log("long " + req.query.long)
    yelp.search({term: "food", ll: req.query.lat + "," + req.query.long}, function(error, data) {
      console.log(error);
      console.log(data);
    });
})

app.listen(8000);
