const express = require('express'),
        app = express(),
        port = process.env.PORT || 3001,
        cors = require('cors'),
        bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
const routes = require('./api/routes/loggerRoute');
routes(app);

app.use((req, res)=> {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);

console.log('The RESTful API server started on: ' + port);
