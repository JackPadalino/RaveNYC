const db = require('./db');
//const Year = require("./Year");
const Month = require("./Month");
const Day = require("./Day");
const Event = require("./Event");

// Year.hasMany(Month,{
//   onDelete:'CASCADE'
// });
// Month.belongsTo(Year);

Month.hasMany(Day,{
  onDelete:'CASCADE'
})
Day.belongsTo(Month)

Month.hasMany(Event,{
  onDelete:'CASCADE'
});
Event.belongsTo(Month);

Day.hasMany(Event,{
  onDelete:'CASCADE'
});
Event.belongsTo(Day);


module.exports = {
  db,
  //Year,
  Month,
  Day,
  Event
};