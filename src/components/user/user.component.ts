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
      this.users = data;
    });
  }

}
