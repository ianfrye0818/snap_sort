import e from 'express';

class GPSModel {
  constructor(
    public GPSLatitudeRef?: string,
    public GPSLatitude?: number[],
    public GPSLongitudeRef?: string,
    public GPSLongitude?: number[],
    public GPSAltitudeRef?: number,
    public GPSAltitude?: number,
    public GPSTimeStamp?: number[],
    public GPSSpeedRef?: string,
    public GPSSpeed?: number,
    public GPSImgDirectionRef?: string,
    public GPSImgDirection?: number,
    public GPSDestBearingRef?: string,
    public GPSDestBearing?: number,
    public GPSDateStamp?: string,
    public GPSHPositioningError?: number
  ) {
    this.GPSLatitudeRef = GPSLatitudeRef;
    this.GPSLatitude = GPSLatitude;
    this.GPSLongitudeRef = GPSLongitudeRef;
    this.GPSLongitude = GPSLongitude;
    this.GPSAltitudeRef = GPSAltitudeRef;
    this.GPSAltitude = GPSAltitude;
    this.GPSTimeStamp = GPSTimeStamp;
    this.GPSSpeedRef = GPSSpeedRef;
    this.GPSSpeed = GPSSpeed;
    this.GPSImgDirectionRef = GPSImgDirectionRef;
    this.GPSImgDirection = GPSImgDirection;
    this.GPSDestBearingRef = GPSDestBearingRef;
    this.GPSDestBearing = GPSDestBearing;
    this.GPSDateStamp = GPSDateStamp;
    this.GPSHPositioningError = GPSHPositioningError;
  }
}

export default GPSModel;
