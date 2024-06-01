import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  title: string = 'harryTech';

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.selectedUser.subscribe(user => {
      const sUser: any = user;
      this.title = sUser?.name})
  }

}
