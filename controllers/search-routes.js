const router = require('express').Router();
const session = require('express-session');
const sequelize = require('../config/connection');
const { Event } = require('../models');

router.get('/:date&:category', (req, res) => {
    const date = req.params.date
    const category = req.params.category

    if (date==="thisIsTheDefaultDate"){
      Event.findAll({
          where: {
              category_id: req.params.category
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
    } else if (category==="thisIsTheDefaultCategory"){
      Event.findAll({
        where: {
            date: req.params.date,
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
    }else{

      Event.findAll({
        where: {
            date: req.params.date,
            category_id: req.params.category
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
    }
    
  });
  
  module.exports = router;