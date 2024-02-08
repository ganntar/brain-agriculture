import { db } from "../database/database";
import { Culturas } from "../models/Culturas";

export class CulturasService {
  public async getCulturas(): Promise<Culturas[]> {
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

  public async createCulturas(culturas_plantadas: Culturas): Promise<void> {
    const client = await db.connect();
    try {
      const produtor = await client.query(`SELECT p.*, cp.* FROM produtores p
                                           INNER JOIN culturas_plantadas cp on cp.id_produtores = p.id_produtores
                                           WHERE p.id_produtores = $1`, [culturas_plantadas.id_produtores]);
      
      

      const total_area_cultivada = produtor.rows.reduce(
        (accumulator, value) => accumulator + value.area_cultivada, 0);

      if (produtor.rows[0].area_agricultavel <= (total_area_cultivada + culturas_plantadas.area_cultivada)) {
        throw new Error;
      }

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
}
