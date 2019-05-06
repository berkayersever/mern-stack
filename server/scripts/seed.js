// Enables the .env file, therefore add a env property to process object.
// Recommend to require it at the top of the file
require('dotenv').config({path: '../../.env'});

import mongoose from 'mongoose';

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true},
    (err) => {
        if (err) {
            console.log('Database Error----------------', err);
        }
        console.log('Connected to database');
    });

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
});