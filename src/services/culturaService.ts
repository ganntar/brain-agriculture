import { db } from "../database/db";
import { Culturas } from "../models/Culturas";

export class CulturasService {

  public async createCulturas(culturas_plantadas: Culturas): Promise<void> {
    const client = await db.connect();
    try {
           
      await client.query(
        `INSERT INTO culturas_plantadas
                                (nome_cultura,
                                  area_cultivada,
                                  id_produtores
                                 ) VALUES ($1, $2, $3)`,
        [
          culturas_plantadas.nome_cultura,
          culturas_plantadas.area_cultivada,
          culturas_plantadas.id_produtores,
        ]
      );
    } finally {
      client.release();
    }
    }
    
    public async updateCulturas(id: number, culturas_plantadas: Culturas): Promise<void> {
      const client = await db.connect();

      const checkCulturas = await client.query("Select count(*) from culturas_plantadas where id_culturas = $1", [id]);

        try {
          await client.query(
            `UPDATE  culturas_plantadas SET
            nome_cultura = $1,
            area_cultivada = $2,
            id_produtores = $3
             WHERE id_culturas = $4`,
            [
              culturas_plantadas.nome_cultura,
              culturas_plantadas.area_cultivada,
              culturas_plantadas.id_produtores,
              id
            ]
          );
        } finally {
          client.release();
        }
    }
    
    public async deleteCulturas(id_culturas: number): Promise<void> {
        const client = await db.connect();
        try {
            await client.query('DELETE FROM culturas_plantadas WHERE id_culturas = $1', [id_culturas]);
        } finally {
            client.release();
        }
  }

  public async getAllCulturas(): Promise<Culturas[]> {
    const client = await db.connect();
    try {
      const result = await client.query("Select * from culturas_plantadas");
      return result.rows.map(
        (row: any) =>
          new Culturas(
            row.id_culturas,
            row.nome_cultura,
            row.area_cultivada,
            row.id_produtores,
          )
      );
    } finally {
      client.release();
    }
  }

  public async getPorCulturas(): Promise<Culturas[]>{
    const client = await db.connect();
    try {
      const result = await client.query("Select nome_cultura, count(*) as total from culturas_plantadas group by nome_cultura");
      return result.rows;
    } finally {
      client.release();
    }
  }
}
