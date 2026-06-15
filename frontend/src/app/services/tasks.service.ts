import { inject, Service, signal } from '@angular/core';
import { ResponseModel, Task } from '../models/tasks.model';
import { HttpClient } from '@angular/common/http';

@Service()
export class TasksService {
  private readonly httpClient = inject(HttpClient);

  private tasks = signal<Task[]>([]);
  private tasksLoading = signal<boolean>(false);
  readonly tasks$ = this.tasks.asReadonly();
  readonly tasksLoading$ = this.tasksLoading.asReadonly();

  getTasks(filter = '') {
    this.tasksLoading.set(true);
    return this.httpClient
      .get<ResponseModel<Task[]>>(`http://localhost:3000/api/tasks?filter=${filter}`)
      .subscribe({
        next: (response) => {
          this.tasks.set(response.data);
          this.tasksLoading.set(false);
        },
        error: (error) => {
          console.error(error);
          this.tasksLoading.set(false);
        },
        complete: () => {
          this.tasksLoading.set(false);
        },
      });
  }
}
