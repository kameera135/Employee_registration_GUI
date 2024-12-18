import { Component } from '@angular/core';
import { UserService } from '../../../Shared/Services/user.service';
import { User } from '../../../Shared/Models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

  userList!: User[];


  constructor(
    private shared: UserService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.shared.getUser().subscribe({
      next:(response)=>{
        console.log(response);
        this.userList = response;
      },
      error: (error)=>{
        console.log("Error in user retriving",error);
      }
    })
  }

}