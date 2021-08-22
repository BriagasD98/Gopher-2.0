const { Comment } = require('../models')

const commentData = [
    {
        comment_text: 'the old Kanye I miss',
        user_id: '1',
        event_id: '1'
    },
    {
        comment_text: 'Dunk on you scrubs I will',
        user_id: '1',
        event_id: '2'
    },
    {
        comment_text: 'Enjoy donuts greatly I do',
        user_id: '1',
        event_id: '5'
    },
    {
        comment_text: "Can't wait!",
        user_id: '2',
        event_id: '2'
    },
    {
        comment_text: "Make sure to get there early!",
        user_id: '2',
        event_id: '2'
    },
    {
        comment_text: "I'll be there!",
        user_id: '2',
        event_id: '5'
    },
    {
        comment_text: "Can't wait to help out!",
        user_id: '3',
        event_id: '5'
    },
    {
        comment_text: "Wow, it'll be really nice to get some much needed help from my mostly ghostly friendS!",
        user_id: '4',
        event_id: '5'
    },
    {
        comment_text: "Wait, am I supposed to bring the donuts?",
        user_id: '5',
        event_id: '5'
    },
    {
        comment_text: 'Enjoy donuts really really greatly I do',
        user_id: '1',
        event_id: '5'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;