export class Fotos {

  // foto camara
  private imagePie: string;
  private imageTobillo: string;

  // fotos seleccionadas
  private imagenTobillo: string;
  private imagenPie: string;

  public getImageTobillo() {
    return this.imageTobillo;
  }
  // foto camara pie
  public getImagePie() {
    return this.imagePie;
  }
  // foto camara tobillo
  public getimagenTobillo() {
    return this.imagenTobillo;
  }
  public getimagenPie() {
    return this.imagenPie;
  }
  // foto camara tobillo
  public setImageTobillo(imagen: string) {
    this.imageTobillo = imagen;
  }
  // foto camara pie
  public setImagePie(imagen: string) {
    this.imagePie = imagen;
  }
  public setimagenTobillo(index: string) {
    this.imagenTobillo = index;
  }
  public setimagenPie(index: string) {
    this.imagenPie = index;

  }
}
