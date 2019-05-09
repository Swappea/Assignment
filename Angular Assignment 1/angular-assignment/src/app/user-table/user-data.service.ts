import { Injectable } from '@angular/core';
import { UserInfo } from '../model/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData: UserInfo[] = [
    {
      id: 1,
      name: 'Swapnesh',
      age: 23
    },
    {
      id: 2,
      name: 'Dhananjay',
      age: 29
    },
    {
      id: 3,
      name: 'Rahul',
      age: 24
    },
    {
      id: 4,
      name: 'Abhishek',
      age: 26
    },
    {
      id: 5,
      name: 'Vineet',
      age: 30
    },
    {
      id: 6,
      name: 'Tushar',
      age: 22
    }
  ];

  constructor() { }

  public getUserData(): UserInfo[] {
    return this.userData;
  }

}
