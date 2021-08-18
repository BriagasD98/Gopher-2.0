const { User } = require('../models')

const userData = [
    {
        username: 'lrk83',
        email: 'lrk83@cornell.edu',
        password: 'password1234'
    },
    {
        username: 'lrk84',
        email: 'lrk84@cornell.edu',
        password: 'password1234'
    },
    {
        username: 'lrk85',
        email: 'lrk85@cornell.edu',
        password: 'password1234'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;