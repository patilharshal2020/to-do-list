import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser = new Subject;
  constructor(private http: HttpClient) {}



  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getToDos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  onSelectUser(user){
    this.selectedUser.next(user);
  }
}
