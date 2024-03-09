import * as express from 'express';
import { login, refresh, signup } from '../controllers/auth';
import { resetPassword, sendResetURL } from '../controllers/reset_password';
import { updatePassword } from '../controllers/user';
import { protect } from '../middlewares/protect';
import { userPicParser } from '../utils/image_processing/parser';
import { resizeUserPic } from '../utils/image_processing/resize';
import { userCreateValidator } from '../validators/user';

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/signup', userPicParser, userCreateValidator, resizeUserPic, signup);
authRouter.post('/refresh', refresh);

authRouter.patch('/update_password', protect, updatePassword);
authRouter.post('/reset_password', sendResetURL);
authRouter.post('/reset_password/verify', resetPassword);

export default authRouter;
