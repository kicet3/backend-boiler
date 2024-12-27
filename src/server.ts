import app from './app';
import dotenv from 'dotenv';

// 환경 변수 로드
dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
