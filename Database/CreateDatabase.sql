-- Script para crear la base de datos PruebaSD en SQL Server

-- Crear la base de datos PruebaSD
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'PruebaSD')
BEGIN
    CREATE DATABASE [PruebaSD]
END
GO

USE [PruebaSD]
GO

-- Crear la tabla Usuario con ID autoincremental
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Usuario]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Usuario](
        [UsuID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
        [Nombre] [varchar](100) NULL,
        [Apellido] [varchar](100) NULL,
        CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED ([UsuID] ASC)
    )
END
GO

-- Poblar la tabla con 5 registros de prueba (sin especificar ID)
IF NOT EXISTS (SELECT * FROM Usuario)
BEGIN
    INSERT INTO [dbo].[Usuario] ([Nombre], [Apellido]) VALUES
    ('Andres', 'Rodriguez Vera'),
    ('Jose', 'Giraldo Perez'),
    ('Maria', 'Lopez Garcia'),
    ('Carlos', 'Martinez Ruiz'),
    ('Ana', 'Fernandez Torres')
END
GO

-- Verificar los datos insertados
SELECT * FROM Usuario ORDER BY UsuID
GO