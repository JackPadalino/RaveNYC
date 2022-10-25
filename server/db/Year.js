const Sequelize = require("sequelize");
const db = require("./db");

const Year = db.define("year", {
    date:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

module.exports = Year;