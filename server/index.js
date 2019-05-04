import express from 'express';
import UserModel from './models/User';
// const express = require('express');
// const UserModel = require('./models/User');

const app = express();
const port = 3000;

const user1 = new UserModel({
  id: 'first', email: 'berkay@live.se', username: 'Berkay', role: 'admin',
});
const user2 = new UserModel({
  id: 'third', email: 'berkay@live.de', username: 'B3rk4y', role: 'customer',
});
const users = [user1.getData(), user2.getData()];
console.log(users);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/time', (req, res) => res.send({ dateTime: new Date().toJSON() }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
