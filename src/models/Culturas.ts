export class Culturas {
  public id_culturas?: number;
  public nome_cultura: string;
  public area_cultivada: number;
  public id_produtores: number;

  constructor(
    id_culturas: number,
    nome_cultura: string,
    area_cultivada: number,
    id_produtores: number,
  ) {
    this.id_culturas = id_culturas;
    this.nome_cultura = nome_cultura;
    this.area_cultivada = area_cultivada;
    this.id_produtores = id_produtores;  
  }
}
