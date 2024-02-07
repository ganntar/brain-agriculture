export class DatabaseConfig{
    constructor() {
        
    }

    async Connect(): Promise<string>{
        return 'postgres://root:root@localhost:5432/db';
    }
}