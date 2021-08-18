const { Event } = require('../models')

const eventData = [
    {
        title: 'First Event',
        event_description: 'A description of an event',
        date: '1998-06-20',
        address: '3010 French Pl',
        user_id: '1',
        category_id: '1'
    },
    {
        title: 'Second Event',
        event_description: 'A description of an event',
        date: '1998-06-20',
        address: '3010 French Pl',
        user_id: '2',
        category_id: '2'
    },
    {
        title: 'Third Event',
        event_description: 'A description of an event',
        date: '1998-06-20',
        address: '3010 French Pl',
        user_id: '3',
        category_id: '3'
    }
]

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;