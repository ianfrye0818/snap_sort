import GPSModel from './GPSModel';
import ExposureModel from './ExposureModel';

interface ImageModelProps {
  filePath: string;
  height?: number;
  width?: number;
  createdAt?: string;
  modifedAt?: string;
  cameraModel?: string;
  dpi?: number;
  gpsData?: GPSModel;
  imageType?: string;
  orientation?: number;
  software?: string;
  lensModel?: string;
  exposureSettings?: ExposureModel;
}

class ImageModel {
  private filePath: string;
  private height: number;
  private width: number;
  private createdAt: string;
  private modifedAt: string;
  private cameraModel: string;
  private dpi: number;
  private gpsData: GPSModel;
  private imageType: string;
  private orientation: number;
  private software: string;
  private lensModel: string;
  private exposureSettings: ExposureModel;

  constructor({
    filePath,
    height,
    width,
    createdAt,
    modifedAt,
    cameraModel,
    dpi,
    gpsData,
    imageType,
    orientation,
    software,
    lensModel,
    exposureSettings,
  }: ImageModelProps) {
    this.filePath = filePath;
    this.height = height || 0;
    this.width = width || 0;
    this.createdAt = createdAt || '';
    this.modifedAt = modifedAt || '';
    this.cameraModel = cameraModel || '';
    this.dpi = dpi || 0;
    this.gpsData = gpsData || new GPSModel({});
    this.imageType = imageType || '';
    this.orientation = orientation || 0;
    this.software = software || '';
    this.lensModel = lensModel || '';
    this.exposureSettings = exposureSettings || new ExposureModel({});
  }

  public static fromExifData(exifData: any): ImageModel {
    const exposureSettings = new ExposureModel({
      aperture: exifData.exif.ApertureValue,
      exposureTime: exifData.exif.ExposureTime,
      shutterSpeed: exifData.exif.ShutterSpeedValue,
      iso: exifData.exif.ISO,
      focalLength: exifData.exif.FocalLength,
      flash: exifData.exif.Flash,
    });

    const gpsData = new GPSModel({
      GPSLatitudeRef: exifData.gps.GPSLatitudeRef,
      GPSLatitude: exifData.gps.GPSLatitude,
      GPSLongitudeRef: exifData.gps.GPSLongitudeRef,
      GPSLongitude: exifData.gps.GPSLongitude,
      GPSAltitudeRef: exifData.gps.GPSAltitudeRef,
      GPSAltitude: exifData.gps.GPSAltitude,
      GPSTimeStamp: exifData.gps.GPSTimeStamp,
      GPSSpeedRef: exifData.gps.GPSSpeedRef,
      GPSSpeed: exifData.gps.GPSSpeed,
      GPSImgDirectionRef: exifData.gps.GPSImgDirectionRef,
      GPSImgDirection: exifData.gps.GPSImgDirection,
      GPSDestBearingRef: exifData.gps.GPSDestBearingRef,
      GPSDestBearing: exifData.gps.GPSDestBearing,
      GPSDateStamp: exifData.gps.GPSDateStamp,
      GPSHPositioningError: exifData.gps.GPSHPositioningError,
    });

    return new ImageModel({
      filePath: exifData.image.FilePath,
      height: exifData.image.Height,
      width: exifData.image.Width,
      createdAt: exifData.image.CreateDate,
      modifedAt: exifData.image.ModifyDate,
      cameraModel: exifData.image.Model,
      dpi: exifData.image.XResolution,
      gpsData,
      imageType: exifData.image.MIMEType,
      orientation: exifData.image.Orientation,
      software: exifData.image.Software,
      lensModel: exifData.image.LensModel,
      exposureSettings,
    });
  }
}

export default ImageModel;
