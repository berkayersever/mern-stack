const Joi = require(`@hapi/joi`);

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
    signup: {
        email: Joi.string().email().required(),
        username: Joi.string().required(),
        password: Joi.string().regex(passwordReg).required(),
        role: Joi.string().required(),
    }
};