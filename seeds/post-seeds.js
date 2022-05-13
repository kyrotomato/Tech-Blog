const { Post } = require('../models');

const postdata = [
  {
    title: 'Test',
    post_url: 'robertspaceindustries.com',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
