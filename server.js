var express = require('express'),
    path = require('path');

app = express();

app.use("/app", express.static(path.join(__dirname, '/app')))
app.use("/bower_components", express.static(path.join(__dirname, '/bower_components')))
app.listen(8000);
