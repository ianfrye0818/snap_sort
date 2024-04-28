import { Request, Response } from 'express';
import db from '../services/db';

export async function uploadImages(req: Request, res: Response) {
  res.send('Image uploaded!');
}

export async function getImages(req: Request, res: Response) {
  res.send('Hello from images route!');
}

export async function getImage(req: Request, res: Response) {
  res.send('Hello from images route!');
}

export async function updateImage(req: Request, res: Response) {
  res.send('Hello from images route!');
}

export async function deleteImage(req: Request, res: Response) {
  res.send('Hello from images route!');
}

export async function deleteImages(req: Request, res: Response) {
  res.send('Hello from images route!');
}

export async function getImagesByTag(req: Request, res: Response) {
  res.send('Hello from images route!');
}

export async function getImagesByLocation(req: Request, res: Response) {
  res.send('Hello from images route!');
}

export async function getImagesByDate(req: Request, res: Response) {
  res.send('Hello from images route!');
}
