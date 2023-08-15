import express from 'express';
const router = express.Router();

import { login, dashboard } from '../controllers/main.js';
import authentication from '../middleware/auth.js';

router.route('/dashboard').get(authentication, dashboard);
router.route('/login').post(login);

export default router;
