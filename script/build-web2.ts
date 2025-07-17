import { cpSync, rmSync, existsSync } from 'fs';
import { join } from 'path';

const src = join(__dirname, '../apps/web2');
const dest = join(__dirname, '../dist/web2');

if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log('Contenido de web2 copiado a dist/web2');
