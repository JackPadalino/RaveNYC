const Sequelize = require("sequelize");
const db = require("./db");

const Day = db.define("day", {
    date:{
        type:Sequelize.INTEGER,
        allowNull:false,
        validate:{
            min:1,
            max:31
        }
    }
});

module.exports = Day;