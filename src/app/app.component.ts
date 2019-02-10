import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COSMOS';
  constructor(private router: Router) {
  }
  public navigate(target: string) {
    this.router.navigateByUrl(target);
  }
}
