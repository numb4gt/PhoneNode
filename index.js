const express = require('express');
const expressHbs = require("express-handlebars");
const phoneRoute = require('./routes/phoneRoute');
const bodyParser = require('body-parser');
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(express.static(__dirname + "/views"));
hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper('calncelButton',function(){
  return new hbs.SafeString(`<button onclick="window.location='https://nodelanhbs.onrender.com/phone';">Отказаться</button>`);
})
app.engine("hbs", expressHbs.engine(
  {
      layoutsDir: "views/layouts", 
      defaultLayout: "layout",
      extname: "hbs"
  }
))



app.set("view engine", "hbs");

phoneRoute(app);

app.listen(port)
