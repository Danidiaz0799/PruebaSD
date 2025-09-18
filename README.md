# Prueba Práctica - Sistema de Gestión de Usuarios

Aplicación web completa desarrollada siguiendo arquitectura Clean Architecture que permite consultar y visualizar usuarios desde una base de datos, cumpliendo con los lineamientos establecidos en la prueba práctica.

## 📋 Descripción del Proyecto

Sistema que implementa las 4 capas de Clean Architecture:
- **Presentación** (Frontend Angular)
- **Servicios** (Web API)
- **Negocio** (Application Layer)
- **Acceso a Datos** (Infrastructure Layer)

La aplicación permite buscar usuarios en una tabla y visualizar los resultados con funcionalidad de búsqueda en tiempo real.

## 🏗️ Arquitectura de la Solución

```
┌─────────────────────────────────────────────────────────────┐
│                        Domain                               │
│              (Entidades y Abstracciones)                    │
└─────────────────────────────────────────────────────────────┘
        ↑               ↑               ↑               ↑
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Presentación │ │   Servicios  │ │   Negocio    │ │ Acceso Datos │
│   (Angular)  │ │  (Web API)   │ │(Application) │ │(Infrastructure)│
│              │ │              │ │              │ │              │
│ - Components │ │ - Controllers│ │ - Services   │ │ - Repositories│
│ - Services   │ │ - Swagger    │ │ - DTOs       │ │ - DbContext   │
│ - Models     │ │ - CORS       │ │ - Interfaces │ │ - Entities    │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
                                                           ↓
                                                  ┌─────────────────┐
                                                  │ Base de Datos   │
                                                  │   SQL Server    │
                                                  └─────────────────┘
```

## 🚀 Tecnologías Utilizadas

### Backend (.NET 8)
- **ASP.NET Core 8** - Framework web
- **Entity Framework Core** - ORM para acceso a datos
- **SQL Server** - Motor de base de datos
- **Clean Architecture** - Patrón arquitectónico
- **Swagger/OpenAPI** - Documentación de API

### Frontend (Angular)
- **Angular 20** - Framework frontend
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **CSS3** - Estilos modernos
- **HTML5** - Estructura semántica

## 📊 Base de Datos

### Estructura de la tabla `Usuario`

| Column Name | Data Type      | Allow Nulls |
|-------------|---------------|-------------|
| 🔑 usuID    | numeric(18, 0)| ❌          |
| nombre      | varchar(100)  | ✅          |
| apellido    | varchar(100)  | ✅          |

### Datos de Prueba
La base de datos incluye 5 registros de ejemplo:

| Id | Nombre | Apellido |
|----|--------|----------|
| 1  | Andres Rodriguez | Vera |
| 2  | Jose Giraldo | Perez |
| 3  | Carlos Martinez | Ruiz |
| 4  | Ana Sofia | Lopez |
| 5  | Miguel Angel | Garcia |

## 🛠️ Instalación y Configuración

### Prerrequisitos
- .NET 8 SDK
- Node.js 18+
- Angular CLI 20+
- SQL Server (LocalDB o SQL Server Express)

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Danidiaz0799/PruebaSD.git
cd PruebaSD
```

### 2. Configuración de Base de Datos
Asegúrate de tener SQL Server configurado y actualiza la cadena de conexión en `appsettings.json` si es necesario.

### 3. Ejecución de la Aplicación

#### Backend API
```bash
# Navegar al proyecto WebApi
cd WebApi

# Restaurar dependencias
dotnet restore

# Ejecutar migraciones (si es necesario)
dotnet ef database update

# Ejecutar la aplicación
dotnet run
```

#### Frontend Angular
```bash
# Navegar al frontend
cd frontend/usuarios-frontend

# Instalar dependencias
npm install

# Ejecutar aplicación
npm start
```

## 🌐 URLs y Servicios

| Servicio | URL | Descripción |
|----------|-----|-------------|
| **Frontend** | http://localhost:4200 | Aplicación Angular |
| **API Backend** | https://localhost:7000 | API REST |
| **Swagger UI** | https://localhost:7000/swagger | Documentación interactiva |
| **SQL Server** | localhost | Base de datos |

## 📡 API Endpoints

### Usuarios
| Método | Endpoint | Descripción | Ejemplo |
|--------|----------|-------------|---------|
| `GET` | `/api/Usuarios` | Obtener todos los usuarios | - |
| `GET` | `/api/Usuarios/search?searchTerm={término}` | Buscar usuarios | `?searchTerm=Vera` |
| `GET` | `/api/Usuarios/{id}` | Obtener usuario por ID | `/api/Usuarios/1` |

### Ejemplos de Respuesta
```json
[
  {
    "usuID": 1,
    "nombre": "Andres Rodriguez",
    "apellido": "Vera"
  },
  {
    "usuID": 2,
    "nombre": "Jose Giraldo", 
    "apellido": "Perez"
  }
]
```

## 🎯 Funcionalidades Implementadas

### ✅ Capa de Presentación (Angular)
- [x] Interfaz de usuario moderna y responsive
- [x] Tabla de usuarios con datos ordenables
- [x] Campo de búsqueda en tiempo real
- [x] Botón "Buscar" para realizar consultas
- [x] Botón "Limpiar" para resetear búsqueda
- [x] Estados de carga y manejo de errores
- [x] Contador de resultados encontrados

### ✅ Capa de Servicios (Web API)
- [x] Controllers REST con endpoints completos
- [x] Documentación Swagger automática
- [x] Configuración CORS para frontend
- [x] Manejo de errores HTTP
- [x] Validación de parámetros

### ✅ Capa de Negocio (Application)
- [x] Servicios de negocio con interfaces
- [x] DTOs para transferencia de datos
- [x] Lógica de búsqueda por nombre/apellido
- [x] Inyección de dependencias

### ✅ Capa de Acceso a Datos (Infrastructure)
- [x] Repository pattern implementado
- [x] Entity Framework Core configurado
- [x] Conexión a SQL Server
- [x] Migraciones de base de datos
- [x] DbContext con configuración de entidades

## 🗂️ Estructura del Proyecto

```
PruebaSD/
├── 📁 Domain/                     # Entidades y abstracciones
│   ├── Entities/
│   │   └── Usuario.cs
│   └── Repositories/
│       └── IUsuarioRepository.cs
├── 📁 Application/                # Servicios de negocio
│   ├── DTOs/
│   │   └── UsuarioDto.cs
│   └── Services/
│       ├── IUsuarioService.cs
│       └── UsuarioService.cs
├── 📁 Infrastructure/             # Acceso a datos
│   ├── Data/
│   │   └── ApplicationDbContext.cs
│   ├── Repositories/
│   │   └── UsuarioRepository.cs
│   └── DependencyInjection.cs
├── 📁 WebApi/                     # API REST
│   ├── Controllers/
│   │   └── UsuariosController.cs
│   ├── Properties/
│   │   └── launchSettings.json
│   ├── appsettings.json
│   └── Program.cs
├── 📁 frontend/                   # Aplicación Angular
│   └── usuarios-frontend/
│       ├── src/app/
│       │   ├── components/
│       │   │   └── usuario-list/
│       │   ├── models/
│       │   │   └── usuario.model.ts
│       │   ├── services/
│       │   │   └── usuario.service.ts
│       │   ├── app.ts
│       │   ├── app.html
│       │   └── app.css
│       ├── package.json
│       └── angular.json
├── 📁 Database/
│   └── CreateDatabase.sql
├── PruebaSD.sln
└── README.md
```

## 🖥️ Capturas de Pantalla

### Pantalla Principal
La aplicación muestra una interfaz limpia con:
- Campo de búsqueda centrado
- Botones "Buscar" y "Limpiar"
- Tabla con columnas: Id ▼, Nombre ▼, Apellido
- Contador de resultados encontrados

### Funcionalidad de Búsqueda
Al buscar "Vera":
- Se consulta la API en tiempo real
- Se filtran los resultados en la tabla
- Se muestra mensaje de resultados encontrados

## 🧪 Pruebas y Validación

### Probar la Aplicación
1. **Acceder al frontend**: http://localhost:4200
2. **Verificar carga inicial**: La tabla debe mostrar todos los usuarios
3. **Probar búsqueda**: Escribir "Vera" y hacer clic en "Buscar"
4. **Validar resultados**: Debe mostrar "Andres Rodriguez Vera"
5. **Limpiar búsqueda**: Hacer clic en "Limpiar" para mostrar todos

### API Testing con Swagger
1. Ir a https://localhost:7000/swagger
2. Probar endpoint `GET /api/Usuarios`
3. Probar búsqueda: `GET /api/Usuarios/search?searchTerm=Vera`

##  Configuración de Desarrollo

### Backend
- **Puerto**: https://localhost:7000
- **Base de datos**: SQL Server LocalDB
- **CORS**: Configurado para localhost:4200

### Frontend  
- **Puerto**: http://localhost:4200
- **API URL**: https://localhost:7000/api
- **Hot Reload**: Habilitado para desarrollo

## 📝 Notas Técnicas

### Clean Architecture Implementada
- ✅ **Separation of Concerns**: Cada capa tiene responsabilidades específicas
- ✅ **Dependency Inversion**: Las dependencias apuntan hacia abstracciones
- ✅ **Testabilidad**: Interfaces permiten testing unitario
- ✅ **Mantenibilidad**: Código organizado y modular

### Seguridad
- CORS configurado apropiadamente
- Validación de parámetros en API
- Manejo seguro de errores

### Performance
- Consultas optimizadas con Entity Framework
- Componentes Angular con trackBy functions
- Lazy loading donde es aplicable

## 🤝 Contribución

Este proyecto fue desarrollado como prueba práctica siguiendo los lineamientos establecidos. La arquitectura implementada permite escalabilidad y mantenimiento futuro.

## 📄 Licencia

Proyecto desarrollado para prueba práctica - 2025

---

**Desarrollado por**: Daniel Díaz  
**Fecha**: Septiembre 2025  
**Tecnologías**: .NET 8, Angular 20, SQL Server