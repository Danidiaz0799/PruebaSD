# Frontend - Usuario Management App# UsuariosFrontend



Aplicación frontend desarrollada en Angular para gestionar usuarios, conectándose a la API backend ASP.NET Core.This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.



## Características## Development server



- ✅ Lista de usuarios en tablaTo start a local development server, run:

- ✅ Búsqueda de usuarios en tiempo real

- ✅ Interfaz responsive```bash

- ✅ Comunicación con API RESTng serve

- ✅ Manejo de estados de carga y errores```



## Estructura del proyectoOnce the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.



```## Code scaffolding

src/

├── app/Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

│   ├── components/

│   │   └── usuario-list/          # Componente principal de usuarios```bash

│   ├── models/ng generate component component-name

│   │   └── usuario.model.ts       # Interfaces TypeScript```

│   ├── services/

│   │   └── usuario.service.ts     # Servicio HTTP para APIFor a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

│   ├── app.ts                     # Componente principal

│   ├── app.html                   # Template principal```bash

│   ├── app.css                    # Estilos principalesng generate --help

│   └── app.config.ts              # Configuración de la app```

├── proxy.conf.json                # Configuración proxy para CORS

└── package.json                   # Dependencias y scripts## Building

```

To build the project run:

## Instalación y ejecución

```bash

### Prerrequisitosng build

- Node.js 18+ ```

- Angular CLI 20+

- API backend ejecutándose en `http://localhost:8000`This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.



### Comandos## Running unit tests



```bashTo execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

# Instalar dependencias

npm install```bash

ng test

# Ejecutar en modo desarrollo (con proxy para API)```

npm start

## Running end-to-end tests

# La aplicación estará disponible en http://localhost:4200

```For end-to-end (e2e) testing, run:



## Conectividad con la API```bash

ng e2e

La aplicación se conecta a la API backend a través de un proxy configurado en `proxy.conf.json`:```



- **API Base URL**: `http://localhost:8000/api`Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

- **Endpoints utilizados**:

  - `GET /api/usuarios` - Obtener todos los usuarios## Additional Resources

  - `GET /api/usuarios/search?searchTerm={término}` - Buscar usuarios

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Funcionalidades implementadas

### 1. Lista de usuarios
- Tabla con columnas: Id, Nombre, Apellido
- Ordenamiento visual de columnas
- Filas con hover para mejor UX

### 2. Búsqueda
- Campo de entrada con placeholder
- Búsqueda al presionar Enter o botón "Buscar"
- Botón "Limpiar" para resetear búsqueda
- Búsqueda en tiempo real por nombre y apellido

### 3. Estados de la aplicación
- **Carga**: Indicador visual durante requests HTTP
- **Error**: Mensajes de error amigables al usuario
- **Sin datos**: Mensaje cuando no hay usuarios

### 4. Interfaz responsive
- Adaptable a dispositivos móviles
- Botones y campos accesibles en pantallas pequeñas

## Tecnologías utilizadas

- **Angular 20** (Standalone Components)
- **TypeScript 5.7**
- **RxJS** para programación reactiva
- **HttpClient** para consumo de APIs
- **CSS moderno** con Flexbox y Grid
- **Configuración proxy** para desarrollo

## Próximas mejoras

- [ ] Paginación para grandes volúmenes de datos
- [ ] Filtros avanzados
- [ ] Ordenamiento de columnas funcional
- [ ] Modo offline con cache
- [ ] Tests unitarios y e2e
- [ ] Gestión de estados con NgRx