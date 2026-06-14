import express from "express";
import cors from "cors";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.use(tasksRoutes);

app.listen(PORT, () => {
  console.log(`Tasks API Server is running at http://localhost:${PORT}`);
});
