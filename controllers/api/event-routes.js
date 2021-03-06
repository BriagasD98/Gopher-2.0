const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Comment, Event, User, Vote } = require('../../models');
const withAuth = require('../../utils/auth');
//const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  Event.findAll({
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
        attributes: ['username']
      },
      {
          model: Category,
          attributes: ['title']
      }
    ]
  })
    .then(dbEventData => {
      res.json(dbEventData)})
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get a SINGLE user
router.get('/:id', (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id
    },
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
        attributes: ['username']
      },
      {
        model: Category,
        attributes: ['title']
      }
    ]
  })
    .then(dbEventData => {
      if (!dbEventData) {
        res.status(404).json({ message: 'No event found with this id' });
        return;
      }
      res.json(dbEventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create an EVENT
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', event_url: 'https://taskmaster.com/press', user_id: 1}
  if (req.session) {
    Event.create({
        title: req.body.title,
        event_description: req.body.event_description,
        category_id: req.body.category_id,
        date: req.body.date,
        address: req.body.address,
        user_id: req.session.user_id
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  }
});

// Vote on user event
router.put('/upvote', withAuth, (req, res) => {
  // make sure the session exists first
  if (req.session) {
    // pass session id along with all destructured properties on req.body
    Event.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// Update User event
router.put('/:id', withAuth, (req, res) => {
    Event.update(
      {
        title: req.body.title,
        event_description: req.body.event_description,
        category_id: req.body.category_id,
        date: req.body.date,
        address: req.body.address,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbEventData => {
        if (!dbEventData) {
          res.status(404).json({ message: 'No event found with this id' });
          return;
        }
        res.json(dbEventData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Delete an Event
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
    Event.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbEventData => {
        if (!dbEventData) {
          res.status(404).json({ message: 'No event found with this id' });
          return;
        }
        res.json(dbEventData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:date/:category', (req, res) => {
    const date = req.params.date;
    const category = req.params.category

    console.log("date is "+date);
    console.log("category is "+category);

    if (date==="thisIsTheDefaultDate"){
      Event.findAll({
          where: {
              category_id: req.params.category
          }
      })
        .then(dbPostData => {
          res.json(dbPostData);
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
      res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }else{

      console.log(date);
      console.log(category);
      Event.findAll({
        where: {
            date: req.params.date,
            category_id: req.params.category
        }
    })
    .then(dbPostData => {
      res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }
    
  });

module.exports = router;