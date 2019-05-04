import express from 'express';
import bodyParser from 'body-parser';
import users from './mocks/users';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/time', (req, res) => {
    res.send({ datetime: new Date().toJSON() });
});

app.get('/v1/users', (req, res) => {
    res.send(users);
});

app.post('/v1/users', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    res.status(200).end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));