# Changelog

Todas las modificaciones importantes de este proyecto se documentarán en este archivo.

El formato se inspira en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto intentará seguir [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

- Pendiente de definir próximos cambios y versiones.

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
