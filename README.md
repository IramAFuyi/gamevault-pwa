
# 🎮 GameVault

Aplicación Web Progresiva (PWA) desarrollada como práctica
académica de Ingeniería en Software.

## Descripción

GameVault es un catálogo interactivo de 30 videojuegos que
permite consultar información, realizar búsquedas y filtrar
por género, incluso sin conexión a internet.

## Características

- Diseño responsivo.
- Catálogo de 30 videojuegos.
- 10 categorías de videojuegos.
- Renderizado del lado del cliente (CSR).
- Arquitectura App Shell.
- Búsqueda y filtrado dinámico.
- Manifiesto web con iconos adaptativos.
- Service Worker con estrategia Cache First.
- Funcionamiento offline.
- Instalación como aplicación independiente.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Web App Manifest
- Service Worker
- Cache API
- Git y GitHub Pages

## Estructura del proyecto

    gamevault-pwa/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    ├── icons/
    ├── index.html
    ├── manifest.json
    ├── offline.html
    ├── sw.js
    └── README.md

## Resultados de Lighthouse

| Categoría | Inicial | Optimizado |
|---|---:|---:|
| Rendimiento | 76 | 92 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 96 | 96 |
| SEO | 100 | 100 |

Se consiguió una mejora de 16 puntos en rendimiento
mediante optimizaciones de estabilidad visual.

## Ejecución local

Ejecutar desde la raíz del proyecto:

    python -m http.server 5500

Abrir http://localhost:5500

## Pruebas sin conexión

1. Abrir las herramientas de desarrollador (F12).
2. Seleccionar Application.
3. Entrar a Service Workers.
4. Activar la opción Offline.
5. Recargar la aplicación.
6. Comprobar el catálogo, buscador y filtros.

## Objetivo académico

Implementar los componentes esenciales de una Aplicación
Web Progresiva básica y comprobar su funcionamiento
mediante una auditoría y coevaluación técnica.
