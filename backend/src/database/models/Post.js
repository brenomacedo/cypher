const { Model, DataTypes } = require('sequelize')
const User = require('../models/User')
const sequelize = require('../database')

class Post extends Model {}

Post.init({
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

Post.belongsTo(User, { foreignKey: 'userId', as: 'user' })
User.hasMany(Post, { foreignKey: 'userId', as: 'post' })

module.exports = Post