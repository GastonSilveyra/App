export class Fotos {

  private imageTobillo: string;
  private imagePie: string;
  private imagenTobillo: string;
  private imagenPie: string;

  public getImageTobillo() {
    return this.imageTobillo;
  }

  public getImagePie() {
    return this.imagePie;
  }
  public getimagenTobillo() {
    return this.imagenTobillo;
  }
  public getimagenPie() {
    return this.imagenPie;
  }

  public setImageTobillo(imagen: string) {
    this.imageTobillo = imagen;
  }

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
