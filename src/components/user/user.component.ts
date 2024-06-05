import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { ToDo, User, UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
export interface Gender {
  label: string
} 
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FilterPipe, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit, DoCheck {

  gender: Gender[] = [{label: 'All'},{label: 'Male'}, {label: 'Female'}];
  users$: Observable<User[]>;
  selecteduser$: Observable<User>;
  userTasks$: Observable<ToDo>;
  filterBy: string = 'All';
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
