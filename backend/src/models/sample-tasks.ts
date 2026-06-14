import crypto from "crypto";
import type { Task } from "./tasks.model.js";

export const SAMPLE_TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: "Buy groceries",
    status: "active",
    createdAt: new Date("2026-01-10T09:00:00.000Z"),
    updatedAt: new Date("2026-01-10T09:00:00.000Z"),
  },
  {
    id: crypto.randomUUID(),
    title: "Write project proposal",
    status: "completed",
    createdAt: new Date("2026-02-15T14:30:00.000Z"),
    updatedAt: new Date("2026-03-01T10:00:00.000Z"),
  },
  {
    id: crypto.randomUUID(),
    title: "Plan team meeting",
    status: "active",
    createdAt: new Date("2026-06-01T08:00:00.000Z"),
    updatedAt: new Date("2026-06-05T12:00:00.000Z"),
  },
  {
    id: crypto.randomUUID(),
    title: "Refactor authentication module",
    status: "completed",
    createdAt: new Date("2026-05-20T11:15:00.000Z"),
    updatedAt: new Date("2026-05-25T16:45:00.000Z"),
  },
  {
    id: crypto.randomUUID(),
    title: "Review PRs",
    status: "all",
    createdAt: new Date("2026-06-10T09:30:00.000Z"),
    updatedAt: new Date("2026-06-10T09:30:00.000Z"),
  },
];

export default SAMPLE_TASKS;
