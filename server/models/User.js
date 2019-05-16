import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { passwordReg } from '../middleware/userValidation';

export default class User {
    /**
     * @param {string} id
     * @param {string} username
     * @param {string} password
     * @param {string} email
     * @param {string} role
     */
    constructor({ id, username, password, email, role }) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._email = email;
        this._role = role;
    }

    /**
     * @return {string}
     */
    getId = () => this._id;

    /**
     * @return {string}
     */
    getUsername = () => this._username;

    /**
     * @return {string}
     */
    getPassword = () => this._password;

    /**
     * @return {string}
     */
    getEmail = () => this._email;

    /**
     * @return {string}
     */
    getRole = () => this._role;

    /**
     * @return {{id: string, username: string, email: string, role: string}}
     */
    getData = () => ({
        id: this._id,
        username: this._username,
        password: this._password,
        email: this._email,
        role: this._role,
    });
}

export const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!'
        }
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true,
        minlength: [6, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password!'
        }
    },
    role: {
        type: String,
        required: [true, 'Role is required!'],
        trim: true
    }
});

export const UserModel = mongoose.model('User', UserSchema);