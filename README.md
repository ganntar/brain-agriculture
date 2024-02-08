# Teste - Brain Agriculture

## Resumo do projeto

O teste tem como objetivo acurar as habilidades do candidato em resolver alguns problemas relacionados à lógica de programação, regra de negócio e orientação à objetos.

O mesmo consiste em um cadastro de produtor rural com os seguintes dados:

CPF ou CNPJ
Nome do produtor
Nome da Fazenda
Cidade
Estado
Área total em hectares da fazenda
Área agricultável em hectares
Área de vegetação em hectares
Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)

## Stack utilizada

* `Node.js` v18.10.
* `express` v4.18.1,
* `postgres` v8.9.0
* `docker compose` v3.4



### Instalação do projeto

Necessario instalar o docker para executar o postgres, o node deve ser instalado na versão 18 ou acima


## Como rodar a API
Os comandos devem ser executados na sequencia abaixo:
- docker compose up -d
- npm install
- npm run create-populate-db
- npm start

### Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

`/produtor`
* `GET /produtor`
* `GET /produtor/totalfazendas`
* `GET /produtor/totalFazendasHectares`
* `POST /produtor`
*  `Body exemplo`
{
		"cpf_cnpj": "52496677000166",
		"nome_fazenda": "Fazenda Teste 4",
		"cidade": "Goiânia",
		"estado": "GO",
		"area_total_fazenda": 5000,
		"area_agricultavel": 2500,
		"area_vegetacao": 2500
}
* `PUT /produtor/:id`
*  `Body exemplo`
{
		"cpf_cnpj": "52496677000166",
		"nome_fazenda": "Fazenda Teste 4",
		"cidade": "Abadia",
		"estado": "GO",
		"area_total_fazenda": 5000,
		"area_agricultavel": 2700,
		"area_vegetacao": 200
}
* `DELETE /produtor/:id`

`/culturas_plantadas `
* `GET /culturas_plantadas`
* `POST /culturas_plantadas`
*  `Body exemplo`
{
		"nome_cultura": "Plantação de abobora",
		"area_cultivada": 300,
		"id_produtores": 1
}
* `PUT /culturas_plantadas/:id`
*  `Body exemplo`
{
		"nome_cultura": "Plantação de abobora",
		"area_cultivada": 300,
		"id_produtores": 1
}
* `DELETE /culturas_plantadas/:id`

