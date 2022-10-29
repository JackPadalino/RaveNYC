const express = require('express');
const methodOverride = require('method-override');
const volleyball = require('volleyball');
const appRouter = require('./api/index');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(volleyball);
app.use('/',appRouter);

// // might need to use this to redirect to current month's page
// app.get("/", (req, res) => {
//     res.redirect("/game");
//   })

module.exports = app;