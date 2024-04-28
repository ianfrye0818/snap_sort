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

const router = express.Router();

router.get('/', getImages);
router.get('/:id', getImage);
router.get('/tag/:tag', getImagesByTag);
router.get('/location/:location', getImagesByLocation);
router.get('/date/:date', getImagesByDate);

router.post('/', uploadImages);

router.patch('/:id', updateImage);

router.delete('/', deleteImages);
router.delete('/:id', deleteImage);

export default router;
