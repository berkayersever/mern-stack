import express from 'express';
import UserModel from './models/User';
// const express = require('express');
// const UserModel = require('./models/User');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/time', (req, res) => res.send({ datetime: new Date().toJSON() }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
