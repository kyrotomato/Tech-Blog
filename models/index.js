//import models, export model objects
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//association
//reverse association for above
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})


 Post.hasMany(Comment, {
     foreignKey: 'post_id',
     onDelete: 'SET NULL'
 })

module.exports = { User, Post, Comment };
