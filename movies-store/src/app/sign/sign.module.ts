import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule } from 'angularx-social-login/sociallogin.module';
import { SharedModule } from 'primeng/api';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
	{ path: '', component: SignInComponent },
	{ path: 'signUp', component: SignUpComponent },
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
		RouterModule.forChild( routes ),
		SharedModule
  ],
	exports: [ RouterModule ]
})
export class SignModule { }
