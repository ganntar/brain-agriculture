import {express} from 'express';
import {ProdutorService} from '../services/ProdutorService';


export class ProdutorController {
  constructor(private readonly userService: ProdutorService) {}

  async index(req: express.Request, res: express.Response): Promise<void> {
    const users = await this.userService.findAll();
    res.json(users);
  }

  async create(req: express.Request, res: express.Response): Promise<void> {
    const user = await this.userService.create(req.body);
    res.json(user);
  }
}