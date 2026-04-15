# Configuracion local

Este proyecto no debe versionar `node_modules`. Cada maquina debe instalar sus propias dependencias desde `pnpm-lock.yaml`.

## Versiones recomendadas

- Node.js 22 LTS
- pnpm 10.4.1

## Primera instalacion

```powershell
corepack enable
corepack prepare pnpm@10.4.1 --activate
pnpm install --frozen-lockfile
pnpm run dev
```

## Si cambias de maquina o algo falla

```powershell
Remove-Item -Recurse -Force node_modules
pnpm install --frozen-lockfile
pnpm run dev
```

## Error `spawn EPERM`

Si aparece `Error: spawn EPERM`, no es un error del codigo del sitio. Significa que Windows o la seguridad corporativa esta bloqueando que `node.exe` ejecute procesos hijos. Vite necesita lanzar `esbuild`, por eso no puede iniciar.

Prueba:

```powershell
node -e "const {spawnSync}=require('child_process'); const r=spawnSync('cmd.exe',['/c','echo','ok'],{stdio:'inherit'}); console.log(r.error)"
```

Si imprime `EPERM`, instala Node 22 LTS autorizado por TI o pide que permitan a `node.exe` ejecutar procesos hijos.
