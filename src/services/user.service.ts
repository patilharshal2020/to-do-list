import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, switchMap } from 'rxjs';
import { toDo, users } from '../mocks/user';

export interface User {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "gender": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
};

export interface ToDo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(users);
  private toDoSubject: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>(toDo);
  users$ = this.userSubject.asObservable();
  tasks$ = this.toDoSubject.asObservable();
  selectedUserId: BehaviorSubject<number> = new BehaviorSubject<number | null>(users[0].id);
  selectedUser$ = this.selectedUserId.pipe(
    switchMap(userId => 
      this.users$.pipe(
        map(users => users.find(user => user.id === userId))
      )
    )
  );

  userTasks$ = this.selectedUserId.pipe(
    switchMap(userId => 
      this.tasks$.pipe(
        map(tasks => {
          const userTasks = tasks.filter(task => task.userId === userId);
          return {
            completedTasks: userTasks.filter(task => task.completed),
            inProgressTasks: userTasks.filter(task => !task.completed)
          };
        })
      )
    )
  );

  selectUser(user: User){
    this.selectedUserId.next(user.id);
  }







  // constructor(private http: HttpClient) {}


  getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getToDos() {
    // return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
