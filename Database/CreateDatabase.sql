-- Crear la base de datos PruebaSD (ejecutar como superusuario)
-- CREATE DATABASE "PruebaSD";

-- Conectar a la base de datos PruebaSD
-- \c PruebaSD;

-- Crear la tabla usuario
CREATE TABLE IF NOT EXISTS usuario (
    "usuID" NUMERIC(18,0) PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100)
);

-- Poblar la tabla con 5 registros de prueba
INSERT INTO usuario ("usuID", nombre, apellido) VALUES
(1, 'Andres', 'Rodriguez Vera'),
(2, 'Jose', 'Giraldo Perez'),
(3, 'Maria', 'Lopez Garcia'),
(4, 'Carlos', 'Martinez Ruiz'),
(5, 'Ana', 'Fernandez Torres')
ON CONFLICT ("usuID") DO NOTHING;

-- Verificar los datos insertados
SELECT * FROM usuario ORDER BY "usuID";