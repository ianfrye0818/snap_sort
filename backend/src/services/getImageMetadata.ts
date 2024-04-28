import fs from 'fs';
import ImageModel from 'src/models/ImageModel';
import ExifImage from 'exif';

async function getImageMetaData(directory: string): Promise<ImageModel[]> {
  const imageData = [];
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = `${directory}/${file}`;

    if (fs.lstatSync(filePath).isDirectory()) {
      const nestedImageData = await getImageMetaData(filePath);
      imageData.push(...nestedImageData);
    } else {
      const imageMetaData = new Promise<ImageModel>((resolve, reject) => {
        ExifImage(filePath, (error, exifData) => {
          if (error) {
            reject(error);
          }
          resolve(ImageModel.fromExifData({ ...exifData, imagePath: filePath }));
        });
      });
      imageData.push(imageMetaData);
    }
  }
  return Promise.all(imageData);
}
