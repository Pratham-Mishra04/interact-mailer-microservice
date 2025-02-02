import express from 'express';
import { createSendToken } from '../controllers/auth';
import {  sendMailv2 } from '../controllers/mailer';
import { blockProd, protect } from '../middlewares/protect';

const Router = express.Router();

// Router.post('/api', protect, sendMail);
// Router.post('/api/multiple', protect, sendMultipleMail);
Router.post('/api/v2', protect,sendMailv2)
Router.get('/token', blockProd, createSendToken);

export default Router;
