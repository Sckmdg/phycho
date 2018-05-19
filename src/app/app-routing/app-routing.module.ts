import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestPaperComponent } from '../components/test-paper/test-paper.component';
import { TestListComponent } from '../components/test-list/test-list.component';
import { TermsComponent } from '../components/common/terms/terms.component';
import { PrivacyComponent } from '../components/common/privacy/privacy.component';
import { FormFeedbackComponent } from '../components/form-feedback/form-feedback.component';
import { TestResultsComponent } from '../components/test-results/test-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/tests/1', pathMatch: 'full' },
  { path: 'tests/:id', component: TestPaperComponent },
  { path: 'tests', component: TestListComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'feedback', component: FormFeedbackComponent },
  { path: 'results', component: TestResultsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
