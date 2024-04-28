import express, { Request, Response } from 'express';
import 'dotenv/config';
import ImageRoute from './routes/image.route';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use('/api/images', ImageRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
