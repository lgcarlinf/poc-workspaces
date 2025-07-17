import { spawnSync } from 'child_process';
import { cpSync, rmSync, existsSync } from 'fs';
import { join } from 'path';

const src = join(__dirname, '../apps/web1');
const dest = join(__dirname, '../dist/web1');

spawnSync('pnpm', ['hola'], {
  stdio: 'inherit',
  cwd: src
});

if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log('Contenido de web1 copiado a dist/web1');
