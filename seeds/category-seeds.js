const { Category} = require('../models')

const categoryData = [
    {
        title: 'First Category'
    },
    {
        title: 'Second Category'
    },
    {
        title: 'Third Category'
    }
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;