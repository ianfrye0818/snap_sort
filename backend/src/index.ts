import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import ImageRoute from './routes/image.route';
import UserRoute from './routes/user.route';
import AuthRoute from './routes/auth.route';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
//TODO: Add cors options
app.use(cors({}));
app.use(cookieParser());

app.use('/api/images', ImageRoute);
app.use('api/users', UserRoute);
app.use('api/auth', AuthRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
