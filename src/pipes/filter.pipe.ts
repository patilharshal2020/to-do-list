import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../services/user.service';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(list: User[], filterBy: string): User[] {
    if(filterBy.toLowerCase() === 'all' || list.length === 0 || filterBy === ''){
      return list;
    }else{
      return list.filter(user => user.gender.toLowerCase() === filterBy.toLowerCase());
    }
  }

}
