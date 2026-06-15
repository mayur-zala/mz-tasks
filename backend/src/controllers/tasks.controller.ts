import type { Request, Response } from "express";
import SAMPLE_TASKS from "../models/sample-tasks.js";
import type { Task } from "../models/tasks.model.js";

const TASKS = SAMPLE_TASKS;

export const getTasks = (req: Request, res: Response) => {
  const filter: string = (req.query["filter"] as string) || "";
  setTimeout(() => {
    res.status(200).json({
      success: true,
      message: "",
      data:
        filter !== "all"
          ? TASKS.filter((t) => t.status.toLowerCase() === filter.toLowerCase())
          : TASKS,
    });
  }, 1500);
};

export const createTask = (req: Request, res: Response) => {
  const { title } = req.body;

  if (title === null || title === undefined || title === "") {
    return res.status(400).json({
      success: false,
      message: "Task title required!",
      data: null,
    });
  }
  const newTask: Task = {
    id: crypto.randomUUID(),
    title: title,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  TASKS.push(newTask);
  return res.status(200).json({
    success: true,
    message: "Task created successfully!",
    data: newTask.id,
  });
};
