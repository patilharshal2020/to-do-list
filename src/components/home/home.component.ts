import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { UserComponent } from '../user/user.component';
import { TasksComponent } from '../tasks/tasks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopBarComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  showUser: boolean = false;

  toggleShowUser(){
    this.showUser = !this.showUser;
  }
}
