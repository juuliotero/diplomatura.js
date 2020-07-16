import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import os from 'os';
import moment from 'moment';
moment.locale('es');

const PORT = 8080;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);

// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {
  const result = {
    serverCurrentTime: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), // En español
    serverStartUpTime: moment(inicio).format('MMMM Do YYYY, h:mm:ss a'), // En español
    serverUpTime: moment(inicio).startOf('minutes').fromNow(), // usando moment relative time

    status: {
      freemem: os.freemem(),
      totalmem: os.totalmem(),
      uptime: os.uptime(),
      hostname: os.hostname(),
      platform: os.platform(),
    },
  };
  res.json({ result });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
