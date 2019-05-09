import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserInfo } from '../model/UserInfo';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  userData: UserInfo[] = [];
  toggleData = true;

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
  }

  toggleDisplayData() {
    this.toggleData = !this.toggleData;
  }

}
