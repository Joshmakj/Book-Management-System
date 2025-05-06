import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet] ,
 
})
export class AppComponent {
  title = 'Book Management';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToCreate() {
    this.router.navigate(['/create']);
  }
}
