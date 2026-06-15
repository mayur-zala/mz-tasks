export type TaskStatus = 'active' | 'completed' | 'all';
export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskRequest = Pick<Task, 'title'>;

export interface ResponseModel<T> {
  data: T;
  message: string;
  success: boolean;
}
