import * as express from 'express';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ENV } from '../config/env';
import { sendMail } from '../controllers/mailer';
import { protect } from '../middlewares/protect';

const Router = express.Router();

Router.post('/api', protect, sendMail);
Router.get('/token', (req: Request, res: Response) => {
    const access_token = jwt.sign(
        {
            sub: 'backend',
            crt: new Date(),
        },
        ENV.BACKEND_SECRET,
        { expiresIn: '2 days' }
    );

    res.status(200).json({
        status: 'success',
        token: access_token,
    });
});

export default Router;
