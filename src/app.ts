import express from 'express';

import cors from 'cors';

async function bootstrap() {
    const app = express();

    app.use(express.json());
    app.use(cors());
    await app.listen(3000, () => {
        console.log('Servidor escutando na porta 3000')
    });
}
bootstrap();