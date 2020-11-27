const { DataTypes, Model } = require('sequelize')
const User = require('../models/User')
const sequelize = require('../database')

class Request extends Model {}

Request.init({
    id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    from: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    to: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'PENDING'
    }
}, {
    sequelize,
    tableName: 'request'
})

Request.belongsTo(User, { foreignKey: 'to', as: 'user' })
User.hasMany(Request, { foreignKey: 'to', as: 'request' })

module.exports = Request