const express = require("express");
var bodyParser = require("body-parser");
const weatherRouters = require("./routes/weather");
require('newrelic');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", weatherRouters);

app.listen(3000, () => {
    console.log("listening on port 3000");
});


/* url to try
http://localhost:3000/forecast?city=Paris,chennai&days=5
http://localhost:3000/weather/cities?city=Paris&page=1&limit=1
*/
