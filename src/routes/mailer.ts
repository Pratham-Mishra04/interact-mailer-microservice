import * as express from 'express';
import { createSendToken } from '../controllers/auth';
import { sendMail } from '../controllers/mailer';
import { blockProd, protect } from '../middlewares/protect';

const Router = express.Router();

Router.post('/api', protect, sendMail);
Router.get('/token', blockProd, createSendToken);

export default Router;