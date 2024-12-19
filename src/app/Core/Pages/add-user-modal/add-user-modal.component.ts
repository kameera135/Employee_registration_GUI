import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../Shared/Services/user.service';

@Component({
  selector: 'app-add-user-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css'
})
export class AddUserModalComponent {

  tempUser: any = {};
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shared: UserService,
  ){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      epf: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser(): void{

    if(this.userForm.valid){
      this.shared.postUser(this.userForm.value).subscribe({
        next: (res) => {
          console.log(res);
          alert('User added successfully!');
          this.userForm.reset();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }

  }

  close(): void{

  }
}
