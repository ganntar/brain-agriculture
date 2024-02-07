import { Produtor } from '../entities/Produtor';
import {Database}  from '../database/Database'

export class ProdutorService {
    constructor(private database: Database) {}

  async findAll(): Promise<Produtor[]> {
    const query = 'SELECT * FROM users';
    const users: Produtor[] = await this.database.query(query);
    return users.map((user) => new Produtor(user.id, user.document, user.nome_produtor));
  }

  async create(data: { document: DocumentType; nome_produtor: string }): Promise<Produtor[]> {
    const query = `INSERT INTO users (document, nome_produtor) VALUES ($1, $2) RETURNING *`;
    return await this.database.query(query, [data.document, data.nome_produtor]);
  }
}