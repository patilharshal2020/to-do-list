import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users: any = [];
  constructor(private userService: UserService){}


  ngOnInit(){
    this.userService.getUsers().subscribe((data)=>{
      const allUsers: any = data;
      this.userService.getToDos().subscribe((toDoData)=>{
        const userToDo: any = toDoData;
        allUsers.forEach(el => {
          el.tasks = userToDo.filter( t => t.userId === el.id);
        });
        this.users = allUsers;
      })
    });
  }

  public selectUser(user){
    this.userService.onSelectUser(user);
  }

}
