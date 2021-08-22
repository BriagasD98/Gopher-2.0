const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all categories
router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'title',
        ],
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a single category
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title'
        ],
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No Category found with this id'});
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a single category by name
router.get('/title/:title', (req, res) => {

    Category.findOne({
        where: {
            title: req.params.title.replace(/-/g," ")
        },
        attributes: [
            'id',
            'title'
        ],
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No Category found with this id'});
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create a category
router.post('/', withAuth, (req, res) => {
    //if (req.session) {
        Category.create({
            title: req.body.title,
        })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    //}
});

// Edit a category 
router.put('/:id', withAuth, (req, res) => {
    Category.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No Category found with this id'});
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete a category
router.delete('/:id', withAuth, (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id'});
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;