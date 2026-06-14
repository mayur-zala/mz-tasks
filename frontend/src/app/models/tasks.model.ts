export type TaskStatus = 'active' | 'completed' | 'all';
export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}
