import express from 'express';
import fetch from 'cross-fetch';

var postApi = express.Router();

postApi.get('/', function async(req, res) {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users')
  ]).then(function (responses) {
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (data) {
    let posts = data[0];
    const users = data[1];
    posts.map(element => {
      element.user = users.find(user => user.id === element.userId);
      delete element.userId;
    })
    res.json(posts);
  });
});

postApi.get('/:id', function (req, res) {
  const id = req.params.id;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => {
      let post = json;
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(responseComments => responseComments.json())
        .then(jsonComments => {
          post.comments = jsonComments;
          post.comments.map(element => delete element.postId);
          res.json(post);
        });
    });
});

export default postApi;
