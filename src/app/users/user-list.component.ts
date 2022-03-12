import { Component, OnInit } from '@angular/core';
import { IUser } from './user'
@Component({
    selector: 'pm-users',
    templateUrl: './user-list.component.html',
    
})

export class UserListComponent implements OnInit {
  pageTitle: string = "User list";
  users: IUser[] = [
    {
        "userId": 1,
        "fullName": "Mohamad Lawand",
        "email": "mohamad@email.com",
        "phone": 1231123,
        "country": "lebanon"
    },
    {
        "userId": 2,
        "fullName": "Richard Feynman",
        "email": "richard@email.com",
        "phone": 333333,
        "country": "US"
    },
    {
        "userId": 3,
        "fullName": "Neil Degrasse Tyson",
        "email": "neil@email.com",
        "phone": 44444444,
        "country": "US"
    }
];
showNumber:boolean = false;

showPhone(): void {
        this.showNumber = !this.showNumber;
    };


  private _listFilter: string = '';

get listFilter(): string {
    return this._listFilter;
}
set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.performFilter(value);
}

filteredUsers: IUser[] = [];

ngOnInit(): void {
    this.listFilter = '';
};

performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLowerCase();
    return this.users.filter((user: IUser) =>
            user.fullName.toLowerCase().includes(filterBy));
};
}