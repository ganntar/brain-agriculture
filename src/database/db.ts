import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;
if (!DB_USER || !DB_HOST || !DB_DATABASE || !DB_PASSWORD || !DB_PORT) {
    throw new Error('Faltam configurações de variáveis de ambiente para o banco de dados.');
}

export const db = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: parseInt(DB_PORT),
});