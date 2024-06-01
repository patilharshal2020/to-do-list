import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  selectedUser$: Observable<User>;
  title: string = 'harryTech';

  constructor(private userService: UserService){
    this.selectedUser$ = this.userService.selectedUser$;
  }

  ngOnInit(){
  }

}
