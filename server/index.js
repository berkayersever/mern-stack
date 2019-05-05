import express from 'express';
import users from './mocks/users';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/time', (req, res) => res.send({ datetime: new Date().toJSON() }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));