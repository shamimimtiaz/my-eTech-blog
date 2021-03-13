const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
//const withAuth = require('../../utils/auth');

// GET all users

router.get('/', (req, res) => {
// Access our User model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// GET s single user by ID
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
          id: req.params.id
        },
        include: [
            {
              model: Post,
              attributes: ['id', 'title', 'post_content', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                  model: Post,
                  attributes: ['title']
                }
            }
          ]
        })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });
// POST /api/users
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// add a new user
//     router.post('/', (req, res) => {
//         User.create({
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//         })
// // send the user data back to the client as confirmation and save the session
//         .then(dbUserData => {
//           req.session.save(() => {
//             req.session.user_id = dbUserData.id;
//             req.session.username = dbUserData.username;
//             req.session.loggedIn = true;
        
//             res.json(dbUserData);
//           });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
//     });
// login route for a user    
    router.post('/login', (req, res) => {
// findOne method by email to look for an existing user in the database with the email address entered        
        User.findOne({
            where: {
            email: req.body.email
        }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
// call the instance method to verify the password  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
// // save the session, and return the user object and show success
//     req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.username = dbUserData.username;
//         req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });  
//});

// log out for a logged in user
    router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
      res.status(404).end();
    }
});

// update an existing user
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // delete an existing user
router.delete('/:id', (req, res) => {
    // destroy method
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;