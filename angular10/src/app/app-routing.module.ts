import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'login',
    pathMatch :'full'
  },
{
path : 'login',
component : LoginComponent
  
},
{
  path : 'welcome',
  component : WelcomeComponent
},
{
  path :'signup',
  component : SignUpComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
