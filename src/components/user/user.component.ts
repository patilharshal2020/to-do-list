import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { ToDo, User, UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit, DoCheck {

  users$: Observable<User[]>;
  selecteduser$: Observable<User>;
  userTasks$: Observable<ToDo>;
  constructor(private userService: UserService){
    this.users$ = this.userService.users$;
    this.selecteduser$ = this.userService.selectedUser$;
  }


  ngOnInit(){
  }

  ngDoCheck(){
    console.log('change detection run users');
  }

  onSelectUser(user: User){
    this.userService.selectUser(user);
  }

}
