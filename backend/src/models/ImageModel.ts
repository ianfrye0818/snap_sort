import GPSModel from './GPSModel';
import ExposureModel from './ExposureModel';

class ImageModel {
  constructor(
    public filePath: string,
    public height?: number,
    public width?: number,
    public createdAt?: string,
    public modifedAt?: string,
    public cameraModel?: string,
    public dpi?: number,
    public gpsData?: GPSModel,
    public imageType?: string,
    public orientation?: number,
    public software?: string,
    public lensModel?: string,
    public exposureSettings?: ExposureModel
  ) {
    this.filePath = filePath;
    this.height = height;
    this.width = width;
    this.createdAt = createdAt;
    this.modifedAt = modifedAt;
    this.cameraModel = cameraModel;
    this.dpi = dpi;
    this.gpsData = gpsData;
    this.imageType = imageType;
    this.orientation = orientation;
    this.software = software;
    this.lensModel = lensModel;
    this.exposureSettings = exposureSettings;
  }

  public static fromExifData(exifData: any): ImageModel {
    const exposureSettings = new ExposureModel(
      exifData.exif.FNumber,
      exifData.exif.ExposureTime,
      exifData.exif.ShutterSpeedValue,
      exifData.exif.ISO,
      exifData.exif.FocalLength,
      exifData.exif.Flash
    );

    const gpsData = new GPSModel(
      exifData.gps.GPSLatitudeRef,
      exifData.gps.GPSLatitude,
      exifData.gps.GPSLongitudeRef,
      exifData.gps.GPSLongitude,
      exifData.gps.GPSAltitudeRef,
      exifData.gps.GPSAltitude,
      exifData.gps.GPSTimeStamp,
      exifData.gps.GPSSpeedRef,
      exifData.gps.GPSSpeed,
      exifData.gps.GPSImgDirectionRef,
      exifData.gps.GPSImgDirection,
      exifData.gps.GPSDestBearingRef,
      exifData.gps.GPSDestBearing,
      exifData.gps.GPSDateStamp,
      exifData.gps.GPSHPositioningError
    );

    return new ImageModel(
      exifData.imagePath,
      exifData.exif.ExifImageHeight,
      exifData.exif.ExifImageWidth,
      exifData.exif.CreateDate,
      exifData.image.ModifyDate,
      exifData.image.Model,
      exifData.image.XResolution,
      gpsData,
      exifData.image.Artist,
      exifData.image.Orientation,
      exifData.image.Software,
      exifData.exif.LensModel,
      exposureSettings
    );
  }
}

export default ImageModel;
