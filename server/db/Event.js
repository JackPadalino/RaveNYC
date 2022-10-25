const Sequelize = require("sequelize");
const db = require("./db");

const Event = db.define("event", {
    artist:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    venue:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Event;