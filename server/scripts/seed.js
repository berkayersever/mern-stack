import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    email: String,
    username: String,
    role: String
});

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

db.once('open', () => {
    console.log('Database connection is open!');
});