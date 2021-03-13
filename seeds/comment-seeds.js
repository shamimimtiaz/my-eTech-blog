const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "We just reached a million subscribers! kudos",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Awesome! kudos to everyone who have contributed",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Ah, so that's what cookies are good for (besides eating ~.0)!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "We are always looking for awesome coder",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "This gives our server easy access to the user's",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "accessing the session information in the routes is very straightforward",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;