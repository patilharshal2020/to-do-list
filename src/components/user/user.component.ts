import { Component, OnInit } from '@angular/core';
import { ToDo, User, UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;
  selecteduser$: Observable<User>;
  userTasks$: Observable<ToDo>;
  constructor(private userService: UserService){
    this.users$ = this.userService.users$;
    this.selecteduser$ = this.userService.selectedUser$;
  }


  ngOnInit(){
  }

  onSelectUser(user: User){
    this.userService.selectUser(user);
  }

}
