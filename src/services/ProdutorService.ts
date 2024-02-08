import { db } from "../database/database";
import { Produtor } from "../models/Produtor";

export class ProdutorService {

  public async getTotalFazendas(): Promise<Produtor[]> {
    const client = await db.connect();
    try {
      const result = await client.query("Select count(*) as totalFazendas from produtores");
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  public async getTotalFazendasHectares(): Promise<Produtor[]> {
    const client = await db.connect();
    try {
      const result = await client.query("Select sum(area_total_fazenda) as totalFazendasHectares from produtores");

      return result.rows[0];
    } finally {
      client.release();
    }
  }

  public async getProdutor(): Promise<Produtor[]> {
    const client = await db.connect();
    try {
      const result = await client.query("Select * from produtores");
      return result.rows.map(
        (row: any) =>
          new Produtor(
            row.id_produtores,
            row.cpf_cnpj,
            row.nome_fazenda,
            row.cidade,
            row.estado,
            row.area_total_fazenda,
            row.area_agricultavel,
            row.area_vegetacao
          )
      );
    } finally {
      client.release();
    }
  }

  public async createProdutor(produtor: Produtor): Promise<void> {
    const client = await db.connect();
    try {
      await client.query(
        `INSERT INTO produtores
                                (cpf_cnpj,
                                 nome_fazenda,
                                 cidade,
                                 estado,
                                 area_total_fazenda,
                                 area_agricultavel,
                                 area_vegetacao) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          produtor.cpf_cnpj,
          produtor.nome_fazenda,
          produtor.cidade,
          produtor.estado,
          produtor.area_total_fazenda,
          produtor.area_agricultavel,
          produtor.area_vegetacao,
        ]
      );
    } finally {
      client.release();
    }
    }
    
    public async updateProdutor(id: number, produtor: Produtor): Promise<void> {
        const client = await db.connect();
        try {
          await client.query(
            `UPDATE  produtores SET
                                    cpf_cnpj = $1,
                                     nome_fazenda = $2,
                                     cidade = $3,
                                     estado = $4,
                                     area_total_fazenda = $5,
                                     area_agricultavel = $6,
                                     area_vegetacao = $7 WHERE id_produtores = $8`,
            [
              produtor.cpf_cnpj,
              produtor.nome_fazenda,
              produtor.cidade,
              produtor.estado,
              produtor.area_total_fazenda,
              produtor.area_agricultavel,
              produtor.area_vegetacao,
              id
            ]
          );
        } finally {
          client.release();
        }
    }
    
    public async deleteProdutor(id_produtor: number): Promise<void> {
        const client = await db.connect();
        try {
            await client.query('DELETE FROM produtores WHERE id_produtores = $1', [id_produtor]);
        } finally {
            client.release();
        }
    }
}
