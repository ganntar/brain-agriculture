import { Request, Response } from 'express';
import { ProdutorService } from '../services/ProdutorService';
import { Produtor } from '../models/Produtor';

export class ProdutorController {
    private produtorService: ProdutorService;

    constructor() {
		this.produtorService = new ProdutorService();
	}

	public async createProdutor(req: Request, res: Response): Promise<void> {
		const {
			_,
			cpf_cnpj,
			nome_fazenda,
			cidade,
			estado,
			area_total_fazenda,
			area_agricultavel,
			area_vegetacao } = req.body;
		
		
        const newProdutor = new Produtor(_,cpf_cnpj,
			nome_fazenda,
			cidade,
			estado,
			area_total_fazenda,
			area_agricultavel,
			area_vegetacao);
		try {
			let total_agri_vege = area_agricultavel + area_vegetacao;

			if (total_agri_vege > area_total_fazenda) {
				return res.status(412).send('A soma de área agrícultável e vegetação, não pode ser maior que a área total da fazenda')
			}

			await this.produtorService.createProdutor(newProdutor);
			
            return res.status(201).send('Produtor created successfully');
        } catch (error) {
            return res.status(500).send(error.message);
        }
	}
	
	public async updateProdutor(req: Request, res: Response): Promise<void> {
		const id_produtores: number = parseInt(req.params.id);
		const {
			_,
			cpf_cnpj,
			nome_fazenda,
			cidade,
			estado,
			area_total_fazenda,
			area_agricultavel,
			area_vegetacao } = req.body;
        const updatedProdutor = new Produtor(_,cpf_cnpj,
			nome_fazenda,
			cidade,
			estado,
			area_total_fazenda,
			area_agricultavel,
			area_vegetacao);
		try {
			let total_agri_vege = area_agricultavel + area_vegetacao;

			if (total_agri_vege > area_total_fazenda) {
				return res.status(412).send('A soma de área agrícultável e vegetação, não pode ser maior que a área total da fazenda')
			}
            await this.produtorService.updateProdutor(id_produtores, updatedProdutor);
            res.status(201).send('Produtor updated successfully');
        } catch (error) {
            res.status(500).send(error.message);
        }
	}
	
	public async deleteProdutor(req: Request, res: Response): Promise<void> {
		const id_produtores: number = parseInt(req.params.id);
        try {
            await this.produtorService.deleteProdutor(id_produtores);
            res.status(200).send('Produtor deleted successfully');
        } catch (error) {
            res.status(500).send(error.message);
        }
	}

	public async getProdutor(req: Request, res: Response): Promise<void>{
		try {
			const produtor = await this.produtorService.getProdutor();
			res.status(200).json(produtor);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	
	public async getTotalFazendas(req: Request, res: Response): Promise<void>{
		try {
			const produtor = await this.produtorService.getTotalFazendas();
			res.status(200).json(produtor);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	public async getTotalFazendasHectares(req: Request, res: Response): Promise<void>{
		try {
			const produtor = await this.produtorService.getTotalFazendasHectares();
			res.status(200).json(produtor);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	
	public async getFazendasPorEstados(req: Request, res: Response): Promise<void>{
		try {
			const produtor = await this.produtorService.getFazendasPorEstados();
			res.status(200).json(produtor);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	public async getPorUsoSolo(req: Request, res: Response): Promise<void>{
		try {
			const produtor = await this.produtorService.getPorUsoSolo();
			res.status(200).json(produtor);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

}