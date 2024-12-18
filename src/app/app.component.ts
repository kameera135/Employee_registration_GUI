import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserViewComponent } from './Core/Pages/user-view/user-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeRegistration';
}
