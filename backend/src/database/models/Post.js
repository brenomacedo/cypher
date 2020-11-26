const { Model, DataTypes } = require('sequelize')
const User = require('../models/User')
const sequelize = require('../database')

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'post'
})

User.hasMany(Post, { foreignKey: 'userId', as: 'post' })
Post.belongsTo(User, { foreignKey: 'userId', as: 'user' })

module.exports = Post