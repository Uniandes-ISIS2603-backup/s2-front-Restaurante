import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { LoginComponent }       from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

imports: [ RouterModule.forRoot(routes) ]