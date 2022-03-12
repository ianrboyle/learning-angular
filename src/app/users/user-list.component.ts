import { Component } from '@angular/core'

@Component({
    selector: 'pm-users',
    templateUrl: './user-list.component.html',
    
})

export class UserListComponent {
  pageTitle: string = "User list";
  users: any[] = [
    {
        "userId": 1,
        "fullName": "Mohamad Lawand",
        "email": "mohamad@email.com",
        "phone": "1231123",
        "country": "lebanon"
    },
    {
        "userId": 2,
        "fullName": "Richard Feynman",
        "email": "richard@email.com",
        "phone": "333333",
        "country": "US"
    },
    {
        "userId": 3,
        "fullName": "Neil Degrasse Tyson",
        "email": "neil@email.com",
        "phone": "44444444",
        "country": "US"
    }
];
showNumber:boolean = false;

showPhone(): void {
        this.showNumber = !this.showNumber;
    };
}