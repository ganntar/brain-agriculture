import { db } from '../database/database';
import * as fs from 'fs';

const executeSqlScript = async (filePath: string): Promise<void> => {
    const sql = fs.readFileSync(filePath, 'utf8');
    const client = await db.connect();
    try {
        await client.query(sql);
        console.log(`Script ${filePath} executado com sucesso.`);
    } finally {
        client.release();
    }
};

const createTables = async (): Promise<void> => {
    await executeSqlScript(__dirname + '/scripts/create_tables.sql');
    await executeSqlScript(__dirname + '/scripts/insert_produtores.sql');
    await executeSqlScript(__dirname + '/scripts/insert_culturas.sql');
};

createTables();