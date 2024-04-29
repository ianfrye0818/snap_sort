interface ExposureModelProps {
  aperture?: number;
  exposureTime?: number;
  shutterSpeed?: number;
  iso?: number;
  focalLength?: number;
  flash?: number;
}

class ExposureModel {
  private aperture: number;
  private exposureTime: number;
  private shutterSpeed: number;
  private iso: number;
  private focalLength: number;
  private flash: number;

  constructor({
    aperture,
    exposureTime,
    shutterSpeed,
    iso,
    focalLength,
    flash,
  }: ExposureModelProps) {
    this.aperture = aperture || 0;
    this.exposureTime = exposureTime || 0;
    this.shutterSpeed = shutterSpeed || 0;
    this.iso = iso || 0;
    this.focalLength = focalLength || 0;
    this.flash = flash || 0;
  }

  getAperture(): number {
    return this.aperture;
  }

  getExposureTime(): number {
    return this.exposureTime;
  }

  getShutterSpeed(): number {
    return this.shutterSpeed;
  }

  getIso(): number {
    return this.iso;
  }

  getFocalLength(): number {
    return this.focalLength;
  }

  getFlash(): number {
    return this.flash;
  }
}
export default ExposureModel;
