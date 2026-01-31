# Changelog

Todas las modificaciones importantes de este proyecto se documentarán en este archivo.

El formato se inspira en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto intentará seguir [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [0.2.0] - 2026-01-31

### Added
- Modelo de dominio `WorkerProfile` para representar el perfil de un profesional (categoría, foto, verificación y métricas de trabajo).
- Mock `LIST_WORKERS` que genera dinámicamente una colección de profesionales por categoría usando datos aleatorios y los valores de `LIST_CATEGORIES`.
- Lógica en `SingleCategoryTemplate` para obtener los parámetros de la ruta (`categoryID`, `categoryName`, `categoryImage`) y listar los profesionales de la categoría seleccionada.

### Changed
- `HelperService` ahora expone un método estático `randomInt` para la generación de datos aleatorios reutilizable en los mocks de la aplicación.
- `JobService.listCategoriesWorkers()` pasa a consumir el mock `LIST_CATEGORIES` y devolver los datos como un `Observable` usando `of` + `delay`, unificando la fuente de categorías en la home y en la pantalla de categorías.
- `CategoriesTemplate` y `MainContentTemplate` se actualizan para consumir el nuevo servicio de categorías y trabajar con la estructura de datos proveniente de los mocks.
- El mock de categorías `LIST_CATEGORIES` se actualiza con nombres y _slugs_ de icono/imagen alineados al nuevo set de imágenes en `/assets/images/categories`.
- `CardProfessionalComponent` ahora recibe un `WorkerProfile` tipado vía `@Input`, y se adapta para mostrar la información del profesional en las nuevas tarjetas de resultado.
- Se refactoriza el marcado y los estilos de las tarjetas de profesionales, encabezados de página, lector de mensajes y publicaciones de trabajadores para mejorar la experiencia visual y la consistencia del diseño.
- Se elimina la antigua plantilla de perfil de usuario (`UserProfileTemplate`) y sus archivos asociados.

### Fixed
- Se actualizan el nombre de las imágenes de categorías para que coincidan con el mock de `LIST_CATEGORIES`, simplificando el set de recursos de la aplicación.

## [0.1.0] - 2026-01-25

### Added
- Estructura inicial de la aplicación Angular 9 generada con Angular CLI.
- Sistema de routing principal (`app.routing.ts`) con las plantillas:
  - `MainTemplate` (layout principal)
  - `MainContentTemplate` (contenido principal de la home)
  - `LoginTemplate` (pantalla de inicio de sesión)
  - `RegisterTemplate` (pantalla de registro)
  - `UserProfileTemplate` (perfil de usuario)
  - `CategoriesTemplate` (listado de categorías)
  - Rutas lazy-loaded para `SingleCategoryModule` y `WorkerModule`.
- Componentes compartidos:
  - `ToolbarComponent` (barra superior con búsqueda, notificaciones y usuario).
  - `Sidenav` (navegación lateral).
  - `Footer` y componentes CTA (llamados a la acción).
- Servicio de autenticación `AuthService` con:
  - Método `authUser` simulando un endpoint de login usando `of` + `delay`.
  - Persistencia del usuario en `localStorage` (`setUser`, `getCurrentUser`, `logoutUser`).
- Guard de autenticación básico `AuthGuard` para proteger rutas según el usuario logueado.

### Changed
- Lógica del `ToolbarComponent`:
  - Actualización del método `onLogout()` para que, además de limpiar el usuario en `AuthService`, actualice el flag local `loggedIn` y navegue a la home, consiguiendo que la interfaz cambie inmediatamente sin necesidad de recargar la página.
- Organización de las plantillas para que `MainTemplate` contenga el `toolbar`, el `sidenav`, el `router-outlet` interno y el `footer`, funcionando como layout principal de la aplicación.

### Fixed
- Problema visual donde, tras hacer logout, el header seguía mostrando el estado de usuario conectado hasta que se recargaba manualmente la página. Ahora el cambio se refleja de forma inmediata gracias a la actualización del estado `loggedIn` en `ToolbarComponent`.
