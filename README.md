# backend-Kloth

API REST de **Kloth**, una red social de reseñas de moda. Expone usuarios y artículos (prendas, outfits, marcas y eventos). Las reseñas ya tienen modelo y relaciones; su CRUD se agrega después. No tiene autenticación.

Stack: Node.js, Express, Sequelize y PostgreSQL.

## Requisitos

- Node.js 18 o superior
- PostgreSQL
- DBeaver o pgAdmin (opcional, para ver las tablas)
- Postman (para probar las consultas)

## 1. Crear la base de datos

Con PostgreSQL en ejecución:

```bash
createdb kloth
```

También se puede crear desde DBeaver: clic derecho en *Databases* > *Crear nueva base de datos* > `kloth`.

## 2. Configurar el .env

```bash
cp .env.example .env
```

Edita `.env` con los datos de tu PostgreSQL:

| Variable | Descripción |
|----------|-------------|
| `PORT` | Puerto del servidor (por defecto 3000) |
| `DB_NAME` | Nombre de la base (`kloth`) |
| `DB_USER` | Usuario de PostgreSQL |
| `DB_PASSWORD` | Contraseña. Puede quedar vacía si tu PostgreSQL local no la pide |
| `DB_HOST` | Host (normalmente `localhost`) |
| `DB_PORT` | Puerto de PostgreSQL (normalmente `5432`) |
| `NODE_ENV` | Con `production` no se borran las tablas al arrancar |

El `.env` no se sube al repositorio.

## 3. Ejecutar

```bash
npm install
npm run dev
```

Al arrancar en desarrollo el servidor:

1. Borra y recrea las tablas `users`, `articles` y `reviews` (`sync({ force: true })`).
2. Carga 5 usuarios y 12 artículos de ejemplo.
3. Escucha en `http://localhost:3000`.

## Endpoints

| Método | Ruta | Respuesta |
|--------|------|-----------|
| GET | `/users/:id` | Usuario. 404 si no existe |
| GET | `/articles` | Todos los artículos, los más recientes primero, con su creador |
| GET | `/articles/:id` | Detalle del artículo con su creador. 404 si no existe |

Los errores responden `{ "message": "..." }` con código 404 (no existe) o 500 (error del servidor).

## Postman

Importa `postman/Kloth.postman_collection.json` (*Import* > archivo). La colección usa la variable `baseUrl` (`http://localhost:3000`).

## Modelo de datos

- **User**: fullName, username, email, bio, location, website, profileImage.
- **Article**: una sola tabla con `category` (`PRENDA`, `OUTFIT`, `MARCA`, `EVENTO`) y los campos de cada categoría. Los que no aplican quedan en `null`.
  - Prenda: brand, clothingCategory, color, price (precio de referencia en COP).
  - Outfit: style.
  - Marca: website, country, brandType, foundedYear.
  - Evento: city, country, startDate, endDate, organizer.
- **Review**: rating (entero de 0 a 5), reviewText (máximo 300 caracteres), userId, articleId. Solo se permite una reseña por usuario y artículo.

Relaciones:

- User 1-M Review (`userId`). Si se borra el usuario, la reseña se conserva con autor "Usuario eliminado".
- Article 1-M Review (`articleId`). Si se borra el artículo, se borran sus reseñas.
- User 1-M Article (`creatorId`, opcional). Las marcas y los eventos son catálogo compartido y no tienen creador.
