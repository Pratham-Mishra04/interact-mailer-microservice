import * as express from 'express';
import { Express, NextFunction, Request, Response } from 'express';
import * as ExpressMongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import * as morgan from 'morgan';
import * as path from 'path';
import CORS from './config/cors';
import connectToDB from './config/db';
import { ENV, configENV } from './config/env';
import { connectToCache } from './config/redis';
import ErrorController from './controllers/error';
import AppError from './helpers/app_error';
import authRouter from './routes/auth';
import userRouter from './routes/user';

const app: Express = express();

configENV();

app.use(express.json());
app.use(CORS());
app.use(helmet());
app.use(ExpressMongoSanitize());

if (ENV.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

connectToDB();
connectToCache();

app.use((req: Request, res: Response, next: NextFunction) => {
    req.requestedAt = new Date().toISOString();
    next();
});

app.use('/', authRouter);
app.use('/users', userRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

app.use(ErrorController);

app.listen(ENV.PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${ENV.PORT}`);
});

export default app;
