import type { Request, Response } from "express";
import SAMPLE_TASKS from "../models/sample-tasks.js";

const TASKS = SAMPLE_TASKS;

export const getTasks = (_req: Request, res: Response) => {
  res.status(200).json(TASKS);
};
