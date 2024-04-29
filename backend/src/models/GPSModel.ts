interface GPSModelProps {
  GPSLatitudeRef?: string;
  GPSLatitude?: number[];
  GPSLongitudeRef?: string;
  GPSLongitude?: number[];
  GPSAltitudeRef?: number;
  GPSAltitude?: number;
  GPSTimeStamp?: number[];
  GPSSpeedRef?: string;
  GPSSpeed?: number;
  GPSImgDirectionRef?: string;
  GPSImgDirection?: number;
  GPSDestBearingRef?: string;
  GPSDestBearing?: number;
  GPSDateStamp?: string;
  GPSHPositioningError?: number;
}
class GPSModel {
  private GPSLatitudeRef: string;
  private GPSLatitude: number[];
  private GPSLongitudeRef: string;
  private GPSLongitude: number[];
  private GPSAltitudeRef: number;
  private GPSAltitude: number;
  private GPSTimeStamp: number[];
  private GPSSpeedRef: string;
  private GPSSpeed: number;
  private GPSImgDirectionRef: string;
  private GPSImgDirection: number;
  private GPSDestBearingRef: string;
  private GPSDestBearing: number;
  private GPSDateStamp: string;
  private GPSHPositioningError: number;

  constructor({
    GPSLatitudeRef,
    GPSLatitude,
    GPSLongitudeRef,
    GPSLongitude,
    GPSAltitudeRef,
    GPSAltitude,
    GPSTimeStamp,
    GPSSpeedRef,
    GPSSpeed,
    GPSImgDirectionRef,
    GPSImgDirection,
    GPSDestBearingRef,
    GPSDestBearing,
    GPSDateStamp,
    GPSHPositioningError,
  }: GPSModelProps) {
    this.GPSLatitudeRef = GPSLatitudeRef || '';
    this.GPSLatitude = GPSLatitude || [];
    this.GPSLongitudeRef = GPSLongitudeRef || '';
    this.GPSLongitude = GPSLongitude || [];
    this.GPSAltitudeRef = GPSAltitudeRef || 0;
    this.GPSAltitude = GPSAltitude || 0;
    this.GPSTimeStamp = GPSTimeStamp || [];
    this.GPSSpeedRef = GPSSpeedRef || '';
    this.GPSSpeed = GPSSpeed || 0;
    this.GPSImgDirectionRef = GPSImgDirectionRef || '';
    this.GPSImgDirection = GPSImgDirection || 0;
    this.GPSDestBearingRef = GPSDestBearingRef || '';
    this.GPSDestBearing = GPSDestBearing || 0;
    this.GPSDateStamp = GPSDateStamp || '';
    this.GPSHPositioningError = GPSHPositioningError || 0;
  }

  getGPSLatitudeRef(): string {
    return this.GPSLatitudeRef;
  }

  getGPSLatitude(): number[] {
    return this.GPSLatitude;
  }

  getGPSLongitudeRef(): string {
    return this.GPSLongitudeRef;
  }

  getGPSLongitude(): number[] {
    return this.GPSLongitude;
  }

  getGPSAltitudeRef(): number {
    return this.GPSAltitudeRef;
  }

  getGPSAltitude(): number {
    return this.GPSAltitude;
  }

  getGPSTimeStamp(): number[] {
    return this.GPSTimeStamp;
  }

  getGPSSpeedRef(): string {
    return this.GPSSpeedRef;
  }

  getGPSSpeed(): number {
    return this.GPSSpeed;
  }

  getGPSImgDirectionRef(): string {
    return this.GPSImgDirectionRef;
  }

  getGPSImgDirection(): number {
    return this.GPSImgDirection;
  }

  getGPSDestBearingRef(): string {
    return this.GPSDestBearingRef;
  }

  getGPSDestBearing(): number {
    return this.GPSDestBearing;
  }

  getGPSDateStamp(): string {
    return this.GPSDateStamp;
  }

  getGPSHPositioningError(): number {
    return this.GPSHPositioningError;
  }
}

export default GPSModel;
