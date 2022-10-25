const db = require('./db');
const Year = require("./Year");
const Month = require("./Month");
const Day = require("./Day");
const Event = require("./Event");


Month.belongsTo(Year);
Year.hasMany(Month);

Day.belongsTo(Month)
Month.hasMany(Day)

Event.belongsTo(Day);
Day.hasMany(Event);

module.exports = {
  db,
  Year,
  Month,
  Day,
  Event
};