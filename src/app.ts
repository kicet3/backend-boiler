import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();

// 미들웨어 설정
app.use(express.json());

// 라우트 설정
app.use('/users', userRoutes);

export default app;
