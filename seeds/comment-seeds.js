const { Comment } = require('../models')

const commentData = [
    {
        comment_text: 'This is my first comment',
        user_id: '1',
        event_id: '1'
    },
    {
        comment_text: 'This is my second comment',
        user_id: '2',
        event_id: '2'
    },
    {
        comment_text: 'This is my third comment',
        user_id: '3',
        event_id: '3'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;