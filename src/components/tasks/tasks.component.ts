import { Component, OnInit } from '@angular/core';
import { ToDo, User, UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] // Note: styleUrls instead of styleUrl
})
export class TasksComponent implements OnInit {
  selectedUser$: Observable<User>;
  userTasks$: Observable<any>;

  constructor(private userService: UserService) {
    this.selectedUser$ = this.userService.selectedUser$;
    this.userTasks$ = this.userService.userTasks$;
  }

  ngOnInit() {
  }

  ngDoCheck(){
    // console.log('change detection run tasks');
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
