const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Event, Category } = require('../models');
const getPhotoList = require('./back-end-photos/photo-list');

router.get('/', (req, res) => {
  Category.findAll({
  })
  .then(dbCategoryData => {
    const categories = dbCategoryData.map(category => category.get({ plain: true }));

    res.render('homepage', {
      categories,
      loggedIn: req.session.loggedIn
    });
  });
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/event/:id', (req, res) => {
    Event.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'event_description',
        'title',
        'date',
        'address'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'event_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbEventData => {
        if (!dbEventData) {
          res.status(404).json({ message: 'No event found with this id' });
          return;
        }
        
        const event = dbEventData.get({ plain: true });
  
        var logos = [];

        console.log(event);
        console.log(event.comments);

        for(x=0;x<event.comments.length;x++){
          var user = event.comments[x].user_id%7;
          console.log("user id is "+user)
          var logo = getPhotoList()[user];
          console.log("logo is "+logo);
          event.comments[x].img=logo;
        };

        res.render('single-event', {
          event,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;