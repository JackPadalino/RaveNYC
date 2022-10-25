const Sequelize = require("sequelize");
const db = require("./db");

const Day = db.define("day", {
    date:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Day;