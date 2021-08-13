const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('homepage');
});



module.exports = router;