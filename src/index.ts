import express from 'express';
import { createServer } from 'http';
import produtorRoutes from './routes/produtorRoutes' 
import culturasRoutes from './routes/culturasRoutes'

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/produtor', produtorRoutes);
app.use('/culturas_plantadas', culturasRoutes);

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});