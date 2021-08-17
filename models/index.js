// import all models
const User = require('./User');
const Comment = require('./Comment');
const Event = require('./Event');
const Category = require('./Category');
const Vote = require('./Vote');

// create associations
User.hasMany(Event, {
    foreignKey: 'user_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Event, {
    through: Vote,
    as: 'voted_events',
    foreignKey: 'user_id'
});

Event.belongsToMany(User, {
    through: Vote,
    as: 'voted_events',
    foreignKey: 'event_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Event, {
    foreignKey: 'event_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Event.hasMany(Vote, {
    foreignKey: 'event_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Event, {
    foreignKey: 'event_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Event.hasMany(Comment, {
    foreignKey: 'event_id'
});

Category.hasMany(Event, {
    foreignKey: 'category_id'
});

Event.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = { User, Comment, Event, Category, Vote };