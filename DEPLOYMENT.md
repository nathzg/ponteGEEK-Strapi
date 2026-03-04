# Guía de deployment - ponteGEEK Strapi

## Plataformas recomendadas

El proyecto está preparado para **Railway** o **Render** (usan Nixpacks).

---

## Opción 1: Railway

### Pasos

1. **Sube el código a GitHub** (si no está ya):
   ```bash
   git add .
   git commit -m "Preparar deployment"
   git push origin main
   ```

2. **Conecta con Railway**:
   - Entra a [railway.app](https://railway.app)
   - "New Project" → "Deploy from GitHub repo"
   - Selecciona este repositorio

3. **Base de datos** (elige una):
   - **PostgreSQL de Railway**: "New" → "Database" → "PostgreSQL" (te dará las variables automáticamente)
   - **Tu AWS RDS existente**: Configura las variables manualmente (ver abajo)

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

   DATABASE_HOST=...
   DATABASE_PORT=5432
   DATABASE_NAME=...
   DATABASE_USERNAME=...
   DATABASE_PASSWORD=...

   AWS_ACCESS_KEY_ID=...
   AWS_ACCESS_SECRET=...
   AWS_REGION=us-east-2
   AWS_BUCKET=...
   ```

5. **Generar secretos** (ejecuta en tu terminal):
   ```bash
   # APP_KEYS (4 valores separados por coma)
   openssl rand -base64 32
   openssl rand -base64 32
   openssl rand -base64 32
   openssl rand -base64 32

   # API_TOKEN_SALT, ADMIN_JWT_SECRET, JWT_SECRET
   openssl rand -base64 32
   ```

6. **Deploy**: Railway hará build y deploy automáticamente.

---

## Opción 2: Render

1. **Push a GitHub** (igual que arriba)

2. **Nuevo Web Service** en [render.com](https://render.com)

3. Conecta el repositorio

4. Configuración:
   - **Build Command**: `npm install --omit=dev && npm run build`
   - **Start Command**: `npm run start`
   - **Node Version**: 18

5. Añade las mismas variables de entorno que en Railway

6. Si usas PostgreSQL de Render: añade un "PostgreSQL" database y conecta las variables `DATABASE_*` que te proporcione

---

## Variables obligatorias

| Variable | Descripción |
|----------|-------------|
| `APP_KEYS` | 4 claves separadas por coma (generar con openssl) |
| `API_TOKEN_SALT` | Sal para tokens API |
| `ADMIN_JWT_SECRET` | Secret para JWT del admin |
| `JWT_SECRET` | Secret para JWT de usuarios |
| `DATABASE_HOST` | Host de PostgreSQL |
| `DATABASE_NAME` | Nombre de la base de datos |
| `DATABASE_USERNAME` | Usuario de PostgreSQL |
| `DATABASE_PASSWORD` | Contraseña de PostgreSQL |
| `AWS_ACCESS_KEY_ID` | Para uploads S3 |
| `AWS_ACCESS_SECRET` | Para uploads S3 |
| `AWS_REGION` | Región AWS (ej: us-east-2) |
| `AWS_BUCKET` | Nombre del bucket S3 |
| `PUBLIC_URL` | URL pública del CMS (ej: https://cms.pontegeek.com) |

---

## Desarrollo local

Crea un archivo `.env` basado en `.env.example` con tus valores locales.

```bash
cp .env.example .env
# Edita .env con tus credenciales
npm run develop
```
