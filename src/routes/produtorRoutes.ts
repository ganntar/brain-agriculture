import express, { Router } from 'express';
import { ProdutorController } from '../controllers/ProdutorController';

const router: Router = express.Router();
const produtorController = new ProdutorController();

router.get('/', (req, res) => produtorController.getProdutor(req, res));
router.get('/totalFazendas', (req, res) => produtorController.getTotalFazendas(req, res));
router.get('/totalFazendasHectares', (req, res) => produtorController.getTotalFazendasHectares(req, res));
router.post('/', (req, res) => produtorController.createProdutor(req, res));
router.put('/:id', (req, res) => produtorController.updateProdutor(req, res));
router.delete('/:id', (req, res) => produtorController.deleteProdutor(req, res));


export default router;