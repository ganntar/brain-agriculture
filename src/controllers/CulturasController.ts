import { Request, Response } from "express";
import { CulturasService } from "../services/culturaService";
import { Culturas } from "../models/Culturas";
import { ProdutorService } from "../services/ProdutorService";

export class CulturasController {
  private culturasService: CulturasService;
  private produtorService: ProdutorService;

  constructor() {
    this.culturasService = new CulturasService();
    this.produtorService = new ProdutorService();
  }

  public async createCulturas(req: Request, res: Response): Promise<void> {
    const { _, nome_cultura, area_cultivada, id_produtores } = req.body;
    
    const newCultura = new Culturas(
      _,
      nome_cultura,
      area_cultivada,
      id_produtores
    );
    try {
      const produtor = await this.produtorService.verifyProdutor(id_produtores);

      if (produtor == 0) {
        return res.status(404).send("Id do produtor não encontrado!");
      }

      await this.culturasService.createCulturas(newCultura);

        return res.status(201).send("Cultura created successfully");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  public async updateCulturas(req: Request, res: Response): Promise<void> {
    const id_culturas: number = parseInt(req.params.id);
    const { _, nome_cultura, area_cultivada, id_produtores } = req.body;
    const updatedCulturas = new Culturas(
		_,
		nome_cultura,
		area_cultivada,
		id_produtores
    );

    try {
      const culturasUpdated = await this.culturasService.updateCulturas(id_culturas, updatedCulturas);

      res.status(201).send("Produtor updated successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  public async deleteCulturas(req: Request, res: Response): Promise<void> {
    const id_culturas: number = parseInt(req.params.id);
    try {
      await this.culturasService.deleteCulturas(id_culturas);
      res.status(200).send("Produtor deleted successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  public async getAllCulturas(req: Request, res: Response): Promise<void> {
    try {
      const culturas_plantadas = await this.culturasService.getAllCulturas();
      res.status(200).json(culturas_plantadas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  public async getPorCulturas(req: Request, res: Response): Promise<void> {
    try {
      const culturas_plantadas = await this.culturasService.getPorCulturas();
      res.status(200).json(culturas_plantadas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
