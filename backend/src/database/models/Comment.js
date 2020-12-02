const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
const Post = require('./Post')
const User = require('./User')

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    sequelize, tableName: 'comment'
})

Comment.belongsTo(User, { foreignKey: 'userId', as: 'user' })
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' })

Comment.belongsTo(Post, { foreignKey: 'postId', as: 'post' })
Post.hasMany(Comment, { foreignKey: 'postId', as: 'comment' })

module.exports = Comment