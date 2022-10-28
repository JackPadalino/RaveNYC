const Sequelize = require("sequelize");
const db = require("./db");

const Year = db.define("year", {
    date:{
        type:Sequelize.STRING(),
        allowNull:false,
        unique:true,
        validate:{
            length(date){
                if (date.length<4 || date.length>4) {
                  throw new Error('Only values 4 characters in length allowed!');
                }
            }
        }
    }
});

module.exports = Year;