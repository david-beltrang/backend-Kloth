import 'dotenv/config';
import app from './app.js';
import { sequelize } from './database/database.js';
import { setupRelations } from './database/relations.js';
import { loadInitialUsers } from './database/initUsers.js';
import { loadInitialArticles } from './database/initArticles.js';

// Se importan los modelos para que sequelize.sync() cree sus tablas
import './models/user.js';
import './models/article.js';
import './models/review.js';

const PORT = process.env.PORT || 3000;

async function init() {
  try {
    await sequelize.authenticate();
    console.log('Conexion establecida con la base de datos');

    // Orden: relaciones -> tablas -> datos. Las relaciones se definen antes de sync
    // para que Sequelize cree las llaves foraneas con su onDelete.
    setupRelations();

    // force: true borra y recrea todas las tablas en cada arranque. Solo se usa en
    // desarrollo (NODE_ENV distinto de production); en produccion se conservan los datos.
    const isProduction = process.env.NODE_ENV === 'production';
    await sequelize.sync({ force: !isProduction });
    console.log('Tablas sincronizadas');

    // Primero usuarios, luego articulos (los articulos apuntan a su creador)
    await loadInitialUsers();
    await loadInitialArticles();

    app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
  } catch (error) {
    console.error('Error al iniciar:', error);
  }
}

init();
