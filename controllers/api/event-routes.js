// Double check everything!!!!
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Comment, Event, User, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Event.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'category',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    order: [['created_at', 'DESC']],
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
    .then(dbEventData => res.json(dbEventData))
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
      'post_url',
      'title',
      'category',
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
      if (!dbEventData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbEventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a POST
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  if (req.session) {
    Event.create({
        title: req.body.title,
        category: req.body.category,
        post_url: req.body.post_url,
        user_id: req.session.user_id
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  }
});

// Vote on user post
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

// Update User post
router.put('/:id', withAuth, (req, res) => {
    Event.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbEventData => {
        if (!dbEventData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbEventData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Delete a Post
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
    Event.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbEventData => {
        if (!dbEventData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbEventData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;