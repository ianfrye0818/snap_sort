class ExposureModel {
  constructor(
    public aperture?: number,
    public exposureTime?: number,
    public shutterSpeed?: number,
    public iso?: number,
    public focalLength?: number,
    public flash?: number
  ) {
    this.aperture = aperture;
    this.exposureTime = exposureTime;
    this.shutterSpeed = shutterSpeed;
    this.iso = iso;
    this.focalLength = focalLength;
    this.flash = flash;
  }
}
export default ExposureModel;
