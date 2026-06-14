import { Component, inject, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TasksService } from './services/tasks.service';
import { TaskStatus } from './models/tasks.model';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonToggleModule,
  ],
  templateUrl: './app.html',
})
export class App {
  private readonly tasksService = inject(TasksService);
  tasks = this.tasksService.tasks$;
  filterStatus = signal<TaskStatus>('all');
  tasksLoading = signal(false);
}
