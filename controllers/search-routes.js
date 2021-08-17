const router = require('express').Router();
const session = require('express-session');
const sequelize = require('../config/connection');
const { Event } = require('../models');

router.get('/:city&:date&:attraction', (req, res) => {
    const date = req.params.date
    const attraction = req.params.attraction

    Event.findAll({
        where: {
            city: req.params.city,
            date: req.params.date,
            category: req.params.category
        }
    })
      .then(dbPostData => {
        const events = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('homepage', {
          events,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;