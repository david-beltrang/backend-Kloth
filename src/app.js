import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import articleRoutes from './routes/article.routes.js';

const app = express();

app.use(morgan('dev')); // muestra en consola las peticiones que llegan
app.use(express.json()); // recibe y responde en formato JSON

app.use(userRoutes);
app.use(articleRoutes);

export default app;
