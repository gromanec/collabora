import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/services/auth.service"

@Component({
  selector: 'app-root',
  providers: [AuthService],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(private authService: AuthService){};

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (currentUser) => {
        console.log('Currentt User', currentUser);
        this.authService.setCurrentUser(currentUser);
      },
      error: (err) => {
        console.log("err", err);
        this.authService.setCurrentUser(null);
      }
    });

    this.authService.isLogged$.subscribe((isLoggedIn) => {
      console.log('isLoggedIn', isLoggedIn);
    })

  }
}
