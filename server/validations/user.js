const Joi = require(`@hapi/joi`);
//
// export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//
// export default {
//     signup: {
//         email: Joi.string().email().required(),
//         username: Joi.string().required(),
//         password: Joi.string().regex(passwordReg).required(),
//         role: Joi.string().required(),
//     }
// };

// import Joi from '@hapi/joi';
const email = Joi.string().email().required();
const username = Joi.string().alphanum().min(3).max(30).required();
const message = 'must be between 6-16 characters, ' +
    'have at least one capital letter, ' +
    'one lowercase letter, one digit, ' +
    'and one special character';
const password = Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    .options({
        language: {
            string: {
                regex: {
                    base: message
                }
            }
        }
    });
export const signup = Joi.object().keys({
    email,
    username,
    password
});
export const signin = Joi.object().keys({
    email,
    password
});