import { Request, Response } from "express";
import { CulturasService } from "../services/culturaService";
import { Culturas } from "../models/Culturas";

export class CulturasController {
  private culturasService: CulturasService;

  constructor() {
    this.culturasService = new CulturasService();
  }

  public async getCulturas(req: Request, res: Response): Promise<void> {
    try {
      const produtor = await this.culturasService.getCulturas();
      res.status(200).json(produtor);
    } catch (error) {
      res.status(500).send(error.message);
    }
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
      await this.culturasService.createCulturas(newCultura);
      res.status(201).send("Produtor created successfully");
    } catch (error) {
      res.status(500).send(error.message);
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
      await this.culturasService.updateCulturas(id_culturas, updatedCulturas);
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
}
