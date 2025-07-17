# POC Workspaces - Monorepo

Monorepo de prueba de concepto utilizando pnpm workspaces.

## Estructura del proyecto

```
poc-workspaces/
├── apps/                 # Aplicaciones principales
│   ├── web/             # Aplicación web
│   ├── api/             # API backend
│   └── ...
├── shared/              # Librerías compartidas
│   ├── ui/              # Componentes UI
│   ├── utils/           # Utilidades
│   ├── types/           # Tipos TypeScript
│   └── ...
├── package.json         # Configuración raíz
├── pnpm-workspace.yaml  # Configuración de workspaces
└── .npmrc              # Configuración de pnpm
```

## Requisitos

- Node.js >= 18
- pnpm >= 8

## Instalación

```bash
# Instalar dependencias de todos los workspaces
pnpm install

# O usar el script definido
pnpm run install:all
```

## Scripts disponibles

```bash
# Desarrollo
pnpm dev              # Ejecuta dev en todos los workspaces
pnpm -F @poc/web dev  # Ejecuta dev solo en el workspace web

# Build
pnpm build            # Construye todos los workspaces
pnpm -F @poc/api build # Construye solo el workspace api

# Testing
pnpm test             # Ejecuta tests en todos los workspaces

# Linting
pnpm lint             # Ejecuta lint en todos los workspaces

# Limpieza
pnpm clean            # Limpia todos los workspaces
```

## Gestión de dependencias

### Instalar dependencia en un workspace específico
```bash
# Instalar en un workspace específico
pnpm add react --filter @poc/web

# Instalar dependencia de desarrollo
pnpm add -D typescript --filter @poc/shared-ui

# Instalar dependencia desde otro workspace
pnpm add @poc/shared-utils --filter @poc/web
```

### Instalar dependencia en la raíz
```bash
pnpm add -w eslint
```

## Referencias entre workspaces

Para referenciar un paquete de otro workspace, usa la sintaxis `workspace:*`:

```json
{
  "dependencies": {
    "@poc/shared-ui": "workspace:*",
    "@poc/shared-utils": "workspace:^1.0.0"
  }
}
```

## Comandos útiles

```bash
# Listar todos los workspaces
pnpm list -r --depth -1

# Ejecutar comando en un workspace específico
pnpm -F @poc/web <comando>

# Ejecutar comando en múltiples workspaces
pnpm -F "@poc/*" <comando>

# Ver dependencias de un workspace
pnpm why <paquete> --filter @poc/web
```
