import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  isToggle = false;
  constructor() { }

  toggleResults(): void {
    this.isToggle = !this.isToggle;
  }

}
