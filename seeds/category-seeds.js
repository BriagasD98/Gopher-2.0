const { Category} = require('../models')

const categoryData = [
    {
        title: 'Music'
    },
    {
        title: 'Studying'
    },
    {
        title: 'Sports'
    }
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;