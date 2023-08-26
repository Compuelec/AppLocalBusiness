import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    const loggedInWorkerString = localStorage.getItem('loggedInWorker');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (loggedInWorkerString !== null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  toggleLogin() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      localStorage.removeItem('loggedInWorker');
      this.router.navigate(['/login']);
    }
    this.changeDetectorRef.detectChanges();
  }
}
