import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOnInit() {
    const loggedInWorkerString = localStorage.getItem('loggedInWorker');

    if (loggedInWorkerString !== null) {
      const loggedInWorker = JSON.parse(loggedInWorkerString);
      console.log("Datos del usuario:", loggedInWorker);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
