export class Produtor {
  public id_produtores?: number;
  public cpf_cnpj: string;
  public nome_fazenda: string;
  public cidade: string;
  public estado: string;
  public area_total_fazenda: number;
  public area_agricultavel: number;
  public area_vegetacao: number;

  constructor(
    id_produtores: number,
    cpf_cnpj: string,
    nome_fazenda: string,
    cidade: string,
    estado: string,
    area_total_fazenda: number,
    area_agricultavel: number,
    area_vegetacao: number
  ) {
    this.id_produtores = id_produtores; 
    this.cpf_cnpj = cpf_cnpj; 
    this.nome_fazenda = nome_fazenda; 
    this.cidade = cidade; 
    this.estado = estado; 
    this.area_total_fazenda = area_total_fazenda; 
    this.area_agricultavel = area_agricultavel; 
    this.area_vegetacao = area_vegetacao; 
  }
}
