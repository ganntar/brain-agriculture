CREATE TABLE IF NOT EXISTS produtores (
    id_produtores SERIAL PRIMARY KEY,
    cpf_cnpj VARCHAR(18) NOT NULL,
    nome_fazenda VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    area_total_fazenda INTEGER NOT NULL,
    area_agricultavel INTEGER NOT NULL,
    area_vegetacao INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS culturas_plantadas (
    id_culturas SERIAL PRIMARY KEY,
    nome_cultura VARCHAR(255) NOT NULL,
    area_cultivada INTEGER NOT NULL,
    id_produtores INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_produtores) REFERENCES produtores(id_produtores) ON DELETE CASCADE
);
