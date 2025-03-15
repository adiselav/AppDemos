const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importă sequelize din database.js

const User = sequelize.define('TabelaUser', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    nume: {
        type: DataTypes.TEXT,
    },
    varsta: {
        type: DataTypes.INTEGER,
    },
    salariu: {
        type: DataTypes.REAL,
    }
});

module.exports = User;