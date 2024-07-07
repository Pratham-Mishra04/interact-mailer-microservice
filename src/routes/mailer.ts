import * as express from 'express';
import { createSendToken } from '../controllers/auth';
import { sendMail, sendMultipleMail } from '../controllers/mailer';
import { blockProd, protect } from '../middlewares/protect';

const Router = express.Router();

Router.post('/api', protect, sendMail);
Router.post('/api/multiple', protect, sendMultipleMail);
Router.get('/token', blockProd, createSendToken);

export default Router;
