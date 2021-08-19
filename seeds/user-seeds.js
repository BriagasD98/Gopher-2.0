const { User } = require('../models')

const userData = [
    {
        username: 'Yoda',
        email: 'yoda@yodamail.com',
        password: 'password1234'
    },
    {
        username: 'Obi-Wan',
        email: 'obi@wan.org',
        password: 'password1234'
    },
    {
        username: 'Dark Vader',
        email: 'bringballence@theforce.edu',
        password: 'password1234'
    },
    {
        username: 'Luke Skyslacker',
        email: 'mark@hammel.com',
        password: 'password1234'
    },
    {
        username: 'Uncle Ben',
        email: 'ucle@ben.mail',
        password: 'password1234'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;