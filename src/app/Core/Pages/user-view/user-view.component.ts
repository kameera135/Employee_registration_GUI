import { Component } from '@angular/core';
import { UserService } from '../../../Shared/Services/user.service';
import { User } from '../../../Shared/Models/user.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

  userList!: User[];

  users: any[] = [];


  constructor(
    private shared: UserService,
    private http: HttpClient,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {

    this.getUser();
  }

  getUser(){
    this.shared.getUser().subscribe({
      next:(response)=>{
        //console.log(response);
        this.userList = response;
      },
      error: (error)=>{
        console.log("Error in user retriving",error);
      }
    })
  }

  openAddUserModal(){

    const dialogRef = this.dialog.open(AddUserModalComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((user)=>{
      if(user){
        this.userList.push(user);
      }
    });
  }

}
