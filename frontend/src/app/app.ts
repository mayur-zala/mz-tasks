import { Component, inject, OnInit, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TasksService } from './services/tasks.service';
import { TaskStatus } from './models/tasks.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly tasksService = inject(TasksService);
  tasks = this.tasksService.tasks$;
  filterStatus = signal<TaskStatus>('all');
  tasksLoading = this.tasksService.tasksLoading$;
  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.tasksService.getTasks();
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    console.log(this.taskForm.value);
  }
}
