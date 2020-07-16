import express from 'express';
import fetch from 'node-fetch';

var albumsApi = express.Router();

albumsApi.get('/', async function (req, res) {
  try {
    let responseUsers = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    let usersData = await responseUsers.json();
    let responseAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums/`);
    let albumsData = await responseAlbums.json();

    let respuestaFinal = await albumsData.map((album) => {
      return {
        user: usersData.find((u) => u.id === album.userId),
        id: album.id,
        title: album.title,
        body: album.body,
      };
    });
    res.send(respuestaFinal);
  } catch (error) {
    res.send(error);
  }
});

albumsApi.get('/:id', async function (req, res) {
  try {
    let responseAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.id}`);
    let albumsData = await responseAlbums.json();

    let responsePhotos = await fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`);
    let photosData = await responsePhotos.json();
    photosData = await photosData.map((photo) => {
      delete photo.albumId;
      return {
        photo
      };
    });
    albumsData.photos = photosData;

    res.send(albumsData);
  } catch (error) {
    res.send(error);
  }
});

export default albumsApi;