const router = require('express').Router();
const sequelize = require('../config/connection');
const { Event, User, Comment, Category } = require('../models');
const moment = require('moment');

router.get('/', (req, res) => {

      Event.findAll({
        where: {
            //  use the ID from the session
            user_id: req.session.user_id
        },
        attributes: [
          'id',
          'title',
          'event_description',
          'date',
          'address',
          'user_id',
          'category_id',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE event.id = vote.event_id)'), 'vote_count']
        ],
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'event_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['title']
            }
        ]
    })
    .then(dbEventData => {
        // serialize data before passing to template
        const events = dbEventData.map(event => event.get({ plain: true }));

        var date = moment().format("YYYY-MM-DD");

        res.render('dashboard', { events, date, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/edit/:id', (req, res) => {
    Event.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'event_description',
        'date',
        'address',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE event.id = vote.event_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'event_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['id', 'username']
        },
        {
          model: Category,
          attributes: ['id','title']
        }
      ]
    })
      .then(dbEventData => {

        if (dbEventData) {
          const event = dbEventData.get({ plain: true });

          var date = moment().format("YYYY-MM-DD");

          res.render('edit-event', {
            event,
            date,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;