import express from "express";

import { usersRoutes } from "./routes/users.routes";

import swaggerUi from 'swagger-ui-express';

const app = express();
const swaggerDocument = require('./swagger.json');


app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", usersRoutes);

export { app };
