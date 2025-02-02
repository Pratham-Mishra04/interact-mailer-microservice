import cors from 'cors';  // Correct way to import the default export

const CORS = () =>
    cors({
        allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'],
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        // origin: ENV.FRONTEND_URL,
    });

export default CORS;
