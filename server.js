const express = require('express');
const app = express();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
//express session require
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//define session
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  

//port
const PORT = process.env.PORT || 3001;
app.use(routes);
//requirements for handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//boilerplate middleware
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static file serving for stylesheet
app.use(express.static(path.join(__dirname, 'public')));

//sequelize listen function
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
})

//express session app.use
app.use(session(sess));