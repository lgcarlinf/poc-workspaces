# Apps

Esta carpeta contiene las aplicaciones principales del monorepo.

## Estructura recomendada:

```
apps/
├── web/              # Aplicación web (React, Next.js, etc.)
├── api/              # API backend (Express, Fastify, etc.)
├── mobile/           # Aplicación móvil (React Native, etc.)
└── desktop/          # Aplicación de escritorio (Electron, Tauri, etc.)
```

## Ejemplo de package.json para una app:

```json
{
  "name": "@poc/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@poc/shared-ui": "workspace:*",
    "@poc/shared-utils": "workspace:*"
  }
}
```
