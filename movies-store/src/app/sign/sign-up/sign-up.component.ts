import { Component, OnInit } from '@angular/core';
import { getDefaultUser, User } from 'models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User = getDefaultUser();
  public fieldTextType: boolean = false;
	done = false;
  public isLoading = 0;
  confirmPassword = '';
  
  constructor() { }

  ngOnInit(): void {
    this.done = true;
  }

  checkMatching () {
    if ( !!this.user.password && !!this.confirmPassword && this.user.password !== this.confirmPassword ) {
			return true;
		}
		return false;
  }
  async passwordEye () {
		this.fieldTextType = !this.fieldTextType;
	}

}
