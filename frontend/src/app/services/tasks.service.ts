import { Service, signal } from '@angular/core';
import { Task } from '../models/tasks.model';

@Service()
export class TasksService {
  private tasks = signal<Task[]>([]);
  readonly tasks$ = this.tasks.asReadonly();
}
