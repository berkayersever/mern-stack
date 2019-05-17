import express from 'express';
import Joi from 'joi';
import { UserModel } from '../models/User';
import { signin } from '../validations/user';
import { parseError, sessionizeUser } from '../scripts/helpers';