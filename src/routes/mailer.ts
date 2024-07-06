import * as express from 'express';
import * as path from 'path';
import { createSendToken } from '../controllers/auth';
import { sendMail, sendMultipleMail } from '../controllers/mailer';
import { blockProd, protect } from '../middlewares/protect';

const Router = express.Router();

Router.post('/api', protect, sendMail);
Router.post('/api/multiple', protect, sendMultipleMail);
Router.get('/token', blockProd, createSendToken);

Router.get('/logo.svg', (_, res) => res.sendFile(path.join(__dirname, '../../public/logo.svg')));

export default Router;
