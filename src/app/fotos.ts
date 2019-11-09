export class Fotos {


  private imagenPieCamara: string;
  private imagenTobilloCamara: string;


  private imagenTobilloSelec: string;
  private imagenPieSelec: string;

  public getImagenTobilloCamara() {
    return this.imagenTobilloCamara;
  }

  public getImagenPieCamara() {
    return this.imagenPieCamara;
  }

  public getImagenTobilloSelec() {
    return this.imagenTobilloSelec;
  }
  public getImagenPieSelec() {
    return this.imagenPieSelec;
  }

  public setImagenTobilloCamara(imagen: string) {
    this.imagenTobilloCamara = imagen;
  }

  public setImagenPieCamara(imagen: string) {
    this.imagenPieCamara = imagen;
  }
  public setimagenTobilloSelec(index: string) {
    this.imagenTobilloSelec = index;
  }
  public setimagenPieSelec(index: string) {
    this.imagenPieSelec = index;

  }
}
