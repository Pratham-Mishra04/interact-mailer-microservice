import * as express from 'express';
import { sendMail } from '../controllers/mailer';
import { protect } from '../middlewares/protect';

const Router = express.Router();

Router.post('/api', protect, sendMail);

export default Router;
