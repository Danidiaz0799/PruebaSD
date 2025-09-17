# Usuario Management API

Aplicación backend desarrollada con ASP.NET Core 8 siguiendo Clean Architecture.

## Arquitectura

- **Domain**: Entidades y abstracciones
- **Application**: Servicios de negocio 
- **Infrastructure**: Acceso a datos con PostgreSQL
- **WebApi**: API REST

## Base de Datos

- **Motor**: PostgreSQL 15
- **Base de datos**: `PruebaSD`
- **Tabla**: `usuario` (usuID, nombre, apellido)

## Ejecución con Docker

```bash
# Levantar aplicación completa
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

**Servicios disponibles:**
- API: `http://localhost:8000`
- Swagger: `http://localhost:8000/swagger`
- PostgreSQL: `localhost:5433`

## Endpoints

- `GET /api/usuarios` - Obtener todos los usuarios
- `GET /api/usuarios/search?searchTerm={término}` - Buscar usuarios
- `GET /api/usuarios/{id}` - Obtener usuario por ID

## Tecnologías

- .NET 8
- Entity Framework Core
- PostgreSQL
- Docker