import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }

}
