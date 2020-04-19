import express from 'express';
import routes from '../src/routes';

const app = express();

app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'foi' });
});

app.listen(3333, () => {
  console.log('tst');
});
