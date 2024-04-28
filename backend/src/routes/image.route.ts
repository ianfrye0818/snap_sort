import express from 'express';
import {
  deleteImage,
  deleteImages,
  getImage,
  getImages,
  getImagesByDate,
  getImagesByLocation,
  getImagesByTag,
  updateImage,
  uploadImages,
} from '../controllers/image.controller';

const route = express.Router();

route.get('/', getImages);
route.get('/:id', getImage);
route.get('/tag/:tag', getImagesByTag);
route.get('/location/:location', getImagesByLocation);
route.get('/date/:date', getImagesByDate);

route.post('/', uploadImages);

route.patch('/:id', updateImage);

route.delete('/', deleteImages);
route.delete('/:id', deleteImage);

export default route;
