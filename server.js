var express = require('express'),
    path = require('path');

app = express();

app.use("/app", express.static(path.join(__dirname, '/app')))

app.listen(8000);
