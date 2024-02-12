import express, { Router } from 'express';
import { CulturasController } from '../controllers/CulturasController';

const router: Router = express.Router();
const culturasController = new CulturasController();

router.post('/', (req, res) => culturasController.createCulturas(req, res));
router.put('/:id', (req, res) => culturasController.updateCulturas(req, res));
router.delete('/:id', (req, res) => culturasController.deleteCulturas(req, res));
router.get('/', (req, res) => culturasController.getAllCulturas(req, res));
router.get('/totalPorCulturas', (req, res) => culturasController.getPorCulturas(req, res));


export default router;