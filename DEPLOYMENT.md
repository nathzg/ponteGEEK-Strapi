# Guía de deployment - ponteGEEK Strapi 5

Este proyecto usa **Strapi 5.38** con **better-sqlite3** (SQLite). Sin necesidad de PostgreSQL.

---

## Railway

### 1. Sube el código a GitHub

```bash
git add .
git commit -m "Preparar deployment Railway"
git push origin main
```

### 2. Conecta Railway con tu repo

1. Entra a [railway.app](https://railway.app) e inicia sesión
2. **New Project** → **Deploy from GitHub repo**
3. Selecciona `ponteGEEK-Strapi` (autoriza GitHub si es necesario)

### 3. Añade un Volume (obligatorio para SQLite)

1. Haz clic en tu servicio
2. **Settings** → **Volumes** → **Add Volume**
3. **Mount Path**: `/data`
4. **Name**: `strapi-data` (o el que prefieras)

Esto persiste la base de datos entre redeploys.

### 4. Genera los secretos

Ejecuta en tu terminal para generar cada valor:

```bash
# APP_KEYS (genera 4 y júntalos con coma)
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32

# Para cada una de estas:
openssl rand -base64 32  # API_TOKEN_SALT
openssl rand -base64 32  # ADMIN_JWT_SECRET
openssl rand -base64 32  # ADMIN_ENCRYPTION_KEY
openssl rand -base64 32  # TRANSFER_TOKEN_SALT
openssl rand -base64 32  # JWT_SECRET
```

### 5. Configura las variables de entorno

En Railway: **Variables** → **Add Variable** o **Raw Editor**

Pega todas estas (reemplaza los valores por los generados):

```env
HOST=0.0.0.0
NODE_ENV=production

# Railway asigna PORT automáticamente - no lo definas

# Genera 4 valores con: openssl rand -base64 32
# Ejemplo: APP_KEYS=abc123,def456,ghi789,jkl012
APP_KEYS=key1,key2,key3,key4

API_TOKEN_SALT=tu-salt-generado
ADMIN_JWT_SECRET=tu-admin-secret
ADMIN_ENCRYPTION_KEY=tu-encryption-key
TRANSFER_TOKEN_SALT=tu-transfer-salt
JWT_SECRET=tu-jwt-secret

# Base de datos SQLite (Volume en /data)
DATABASE_FILENAME=/data/data.db

# AWS S3 para uploads (opcional - si usas S3)
AWS_ACCESS_KEY_ID=
AWS_ACCESS_SECRET=
AWS_REGION=us-east-2
AWS_BUCKET=

# IMPORTANTE: Añade después del primer deploy
# Railway te dará una URL como: https://pontegeek-strapi-production.up.railway.app
PUBLIC_URL=https://tu-url.railway.app
```

### 6. Añade la URL pública después del primer deploy

1. Railway te asignará una URL (ej: `https://xxx.up.railway.app`)
2. Copia esa URL y añade la variable:
   ```
   PUBLIC_URL=https://tu-url-real.up.railway.app
   ```
3. Redeploy para que Strapi use la URL correcta

### 7. Domino personalizado (opcional)

En Railway: **Settings** → **Networking** → **Add Domain** para usar algo como `cms.pontegeek.com`

Luego actualiza `PUBLIC_URL` con tu dominio.

---

## Variables obligatorias

| Variable | Descripción |
|----------|-------------|
| `APP_KEYS` | 4 claves separadas por coma (generar con openssl) |
| `API_TOKEN_SALT` | Sal para tokens API |
| `ADMIN_JWT_SECRET` | Secret para JWT del admin |
| `ADMIN_ENCRYPTION_KEY` | Clave para tokens visibles en admin |
| `TRANSFER_TOKEN_SALT` | Sal para transfer tokens |
| `JWT_SECRET` | Secret para JWT de usuarios |
| `DATABASE_FILENAME` | `/data/data.db` (con Volume) |
| `PUBLIC_URL` | URL pública del CMS (tras el deploy) |

---

## Requisitos

- **Node 20+** (configurado en `.nixpacks.toml`)
- **Volume** montado en `/data` para persistir SQLite

---

## Desarrollo local

```bash
cp .env.example .env
# Edita .env con APP_KEYS, secretos, etc.
npm run develop
```
