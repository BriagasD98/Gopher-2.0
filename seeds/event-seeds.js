const { Event } = require('../models')

const eventData = [
    {
        title: 'Donda Waiting Party',
        event_description: "Join us this Saturday at 10:00 while we wait for the newest studio album from Kanye West! We'll all be glued to Reddit and complaining about missed release dates. Should be a blast!",
        date: '2021-08-21',
        address: '3010 French Pl',
        user_id: '1',
        category_id: '1'
    },
    {
        title: 'Pick Up Basketball',
        event_description: "We'll be playing games of 5 on 5 and 3 on 3. Let's start early cause it's so hot. ",
        date: '2021-08-21',
        address: '3001 Harris Park Ave',
        user_id: '2',
        category_id: '3'
    },
    {
        title: 'Open Mic',
        event_description: "Come join us this Saturday at 6:00 for the best open mic in Austin! Everyone gets 2 songs or 10 minutes, whichever comes first. Come early to sign up for the best slots!",
        date: '2021-08-21',
        address: '4101 Guadalupe S',
        user_id: '3',
        category_id: '1'
    },
    {
        title: 'CS Study Group',
        event_description: "What's better than smashing your computer? Helping someone else smash their's! Join us this saturday for a session of headsplitting frustration about missing commas.",
        date: '2021-08-21',
        address: '3010101 E 21st St French Pl',
        user_id: '4',
        category_id: '2'
    },
    {
        title: 'Coding Camp',
        event_description: 'This is a camp where we code. Oh wowow the most fun of camps. Come meet Saturday at 10:00. We have donuts?',
        date: '2021-08-21',
        address: '3001 Harris Park Ave',
        user_id: '5',
        category_id: '2'
    }
]

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;