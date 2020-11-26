const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database')
const Comment = require('./Comment')

class Response extends Model {}

Response.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'comment',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'response'
})

Response.belongsTo(Comment, { foreignKey: 'commentId', as: 'comment' })
Comment.hasMany(Response, { foreignKey: 'commentId', as: 'response' })

module.exports = Response