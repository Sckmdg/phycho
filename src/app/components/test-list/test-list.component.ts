import { Component } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent {
  isToggle = false;
  constructor() { }
  toggleResults(): void {
    this.isToggle = !this.isToggle;
  }
}
