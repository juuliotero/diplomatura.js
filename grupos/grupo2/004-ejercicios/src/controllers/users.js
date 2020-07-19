import express from 'express';
import fetch from 'node-fetch';
var userApi = express.Router();
userApi.get('/', function (req, res) {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/albums'),
  ]).then(function (respuestas) {
    return Promise.all(respuestas.map((respuestas) => respuestas.json()))
  })
    .then(data => {
      let users = data[0];
      let posts = data[1];
      let albums = data[2];
      users.map(user => {
        user.albums = albums.filter(a => a.userId === user.id);
        user.posts = posts.filter(p => p.userId === user.id);
      });
      res.send(users);
    });
});

export default userApi;
