import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestPaperComponent } from '../components/test-paper/test-paper.component';

const routes: Routes = [
  { path: '', redirectTo: '/person', pathMatch: 'full' },
  { path: 'person', component: TestPaperComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
