# Guía de deployment - ponteGEEK Strapi

Este proyecto usa **better-sqlite3** (SQLite) como base de datos. Sin necesidad de PostgreSQL.

---

## Railway (recomendado)

### Pasos

1. **Sube el código a GitHub**:
   ```bash
   git push origin main
   ```

2. **Conecta con Railway**:
   - Entra a [railway.app](https://railway.app)
   - "New Project" → "Deploy from GitHub repo"
   - Selecciona `ponteGEEK-Strapi`

3. **Añade un Volume** (obligatorio para persistir SQLite):
   - En tu servicio → **Settings** → **Volumes** → **Add Volume**
   - **Mount Path**: `/data`
   - Esto persiste la base de datos entre redeploys

4. **Variables de entorno** en Railway → Variables:
   ```
   HOST=0.0.0.0
   PORT=1337
   NODE_ENV=production
   PUBLIC_URL=https://tu-app.railway.app

   APP_KEYS=key1,key2,key3,key4
   API_TOKEN_SALT=tu-salt
   ADMIN_JWT_SECRET=tu-admin-secret
   JWT_SECRET=tu-jwt-secret

   DATABASE_FILENAME=/data/data.db

   AWS_ACCESS_KEY_ID=...
   AWS_ACCESS_SECRET=...
   AWS_REGION=us-east-2
   AWS_BUCKET=...
   ```

5. **Generar secretos** (en tu terminal):
   ```bash
   openssl rand -base64 32  # para cada APP_KEY, API_TOKEN_SALT, etc.
   ```

6. **Deploy**: Railway hará build y deploy automáticamente.

---

## Render

1. **Push a GitHub** y crea un Web Service en [render.com](https://render.com)

2. **Persistent Disk** (obligatorio para SQLite):
   - Settings → **Add Persistent Disk**
   - Mount Path: `/data`

3. **Variables de entorno**: igual que Railway, con `DATABASE_FILENAME=/data/data.db`

4. Build: `npm install --omit=dev && npm run build`  
   Start: `npm run start`

---

## Variables obligatorias (SQLite)

| Variable | Descripción |
|----------|-------------|
| `APP_KEYS` | 4 claves separadas por coma |
| `API_TOKEN_SALT` | Sal para tokens API |
| `ADMIN_JWT_SECRET` | Secret para JWT del admin |
| `JWT_SECRET` | Secret para JWT de usuarios |
| `DATABASE_FILENAME` | Local: `.tmp/data.db` — Producción: `/data/data.db` |
| `AWS_ACCESS_KEY_ID` | Para uploads S3 |
| `AWS_ACCESS_SECRET` | Para uploads S3 |
| `AWS_REGION` | Región AWS |
| `AWS_BUCKET` | Nombre del bucket S3 |
| `PUBLIC_URL` | URL pública del CMS |

---

## Desarrollo local

```bash
cp .env.example .env
# Edita .env con APP_KEYS, secretos, etc.
npm run develop
```
