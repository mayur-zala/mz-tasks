import express from "express";
import cors from "cors";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: "http://localhost:4200",
  }),
);

app.use("/api/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Tasks API Server is running at http://localhost:${PORT}`);
});
