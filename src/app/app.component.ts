import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: String;

  ngOnInit(): void {
      localStorage.clear();

       this.title = "La Delicia";
       this.authService.start();
   }

   /**
   * @ignore
   */
constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout()
  }
}
