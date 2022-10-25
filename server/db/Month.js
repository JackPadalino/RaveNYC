const Sequelize = require("sequelize");
const db = require("./db");

const Month = db.define("month", {
    date:{
        type: Sequelize.ENUM,
        values:[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        allowNull: false
    }
});

module.exports = Month;