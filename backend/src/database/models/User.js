const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
const { v4: uuid } = require('uuid')

class User extends Model {}

User.init({
    uuid: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    banner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "user"
})

User.beforeCreate(user => {
    user.uuid = uuid()
})

module.exports = User