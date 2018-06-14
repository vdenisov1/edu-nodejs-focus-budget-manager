const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  consign = require("consign"),
  cors = require("cors"),
  passport = require("passport"),
  passportConfig = require("./passport")(passport),
  jwt = require("jsonwebtoken"),
  config = require("./index.js"),
  database = require("./database")(mongoose, config);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(process.env.NODE_ENV || "production"));
app.use(cors());
app.use(passport.initialize());

app.set("budgetsecret", config.secret);

/**
 * Instead of using the CORS module you can manually set the headers to
 * allow CORS
 */

//  app.use(function(req, res, next){
//      res.header("Access-Control-Allow-Origin", "*");
//      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, \
//         Content-Type, Accept");
//         next();
//  });

/**
 * We make sure that the files are loaded in the order according to below
 *  because they are dependent on one another.
 */
consign({ cwd: "services" })
  .include("BudgetManagerAPI/app/setup")
  .then("BudgetManagerAPI/app/api")
  .then("BudgetManagerAPI/app/routes")
  .into(app);

module.exports = app;
