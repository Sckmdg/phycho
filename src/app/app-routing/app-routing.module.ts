import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestPaperComponent } from '../components/test-paper/test-paper.component';
import { TestListComponent } from '../components/test-list/test-list.component';
import { TermsComponent } from '../components/common/terms/terms.component';
import { PrivacyComponent } from '../components/common/privacy/privacy.component';

const routes: Routes = [
  { path: '', redirectTo: '/person', pathMatch: 'full' },
  { path: 'person', component: TestPaperComponent },
  { path: 'tests', component: TestListComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
