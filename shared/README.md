# Shared

Esta carpeta contiene librerías y utilidades compartidas entre las aplicaciones.

## Estructura recomendada:

```
shared/
├── ui/               # Componentes UI compartidos
├── utils/            # Utilidades y helpers
├── types/            # Tipos TypeScript compartidos
├── config/           # Configuraciones compartidas
└── constants/        # Constantes compartidas
```

## Ejemplo de package.json para un paquete compartido:

```json
{
  "name": "@poc/shared-ui",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js"
    }
  },
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "dev": "tsup src/index.ts --format cjs,esm --dts --watch"
  },
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
```
