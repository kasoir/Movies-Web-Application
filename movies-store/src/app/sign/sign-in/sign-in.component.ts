import { Component, OnInit } from '@angular/core';
import { getDefaultUser, User } from 'models/user.model';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public fieldTextType: boolean = false;
	done = false;
  public isClicked = false;
  
  public user: User = getDefaultUser();
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.done = true;
  }
  async passwordEye () {
		this.fieldTextType = !this.fieldTextType;
  }
  
  async doLogin () {
		try {
			this.isClicked = true;
			const isSuccessUser = await this.authService.signInUser( this.user.email, this.user.password );
			if ( isSuccessUser ) {
				console.log( isSuccessUser );
			}
			this.isClicked = false;
		} catch ( err ) {
			this.isClicked = false;
			this.messageService.add({ summary:'Error', sticky: false,life:2000, detail: err.error.error || 'Invalid email address or password' } );
			this.authService.signOutUser();
			// if ( !!err.error && err.error.code === 401 ) {
			// 	try {
			// 		const isEmailSent = await this.authService.signInAndSendEmailVerification( this.email, this.password );
			// 		if ( isEmailSent ) {
			// 			this.showVerificationModal( this.email, this.password );
			// 		} else {
			// 			this.toaster.error( `The system couldn't sent verification email to : ` + this.email );
			// 		}
			// 	}
			// 	catch ( err ) {
			// 		console.log( err );
			// 		this.toaster.error( `The system couldn't sent verification email to : ` + this.email );
			// 	}


			// }
		}
	}

}
