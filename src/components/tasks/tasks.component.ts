import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] // Note: styleUrls instead of styleUrl
})
export class TasksComponent implements OnInit {
  selectedUser: any;
  completedTasks: any = [];
  inProgressTasks: any = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.selectedUser.subscribe(async user => {
      this.selectedUser = user;
      this.completedTasks = [];
      this.inProgressTasks = [];
      this.selectedUser.tasks.forEach(task => {
        if (task.completed) {
          this.completedTasks.push(task);
        } else {
          this.inProgressTasks.push(task);
        }
      });
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const task = event.container.data[event.currentIndex];
      task.completed = !task.completed;
    }
  }
}
