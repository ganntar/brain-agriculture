import { DocumentType } from '../utils/document.enum';
export class Produtor {
    constructor(public id: number, public document: DocumentType, public nome_produtor: string) {}
  }