import express from "express";
import userRoutes from "./routes/user.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import articleRoutes from "./routes/article.routes.js";

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(reviewRoutes);
app.use(articleRoutes);

export default app;