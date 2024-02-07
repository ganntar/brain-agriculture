import pg from 'pg';
import { DatabaseConfig } from '../config/DatabaseConfig';


export class Database {
    
    constructor(private readonly connectionString: DatabaseConfig) { }

  async query(query: string, params = []): Promise<any[]> {
    const client = new pg.Client(this.connectionString.Connect());
    await client.connect();
    const result = await client.query(query, params);
    await client.end();
    return result.rows;
  }
}