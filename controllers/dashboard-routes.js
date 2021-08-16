// rename "edit-post" to proper view name
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Event, User, Comment, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    // console.log(req.session);
    // console.log('===================');
    /* Event.findAll({
        where: {
            //  use the ID from the session
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'category'
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
        const events = dbEventData.map(event => event.get({ plain: true })); */
        res.render('dashboard'/* , { events, loggedIn: true } */ );
    })
    /*.catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); */


router.get('/edit/:id', withAuth, (req, res) => {
    Event.findByPk(req.params.id, {
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
        if (dbEventData) {
          const event = dbEventData.get({ plain: true });
          
          res.render('edit-post', {
            event,
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