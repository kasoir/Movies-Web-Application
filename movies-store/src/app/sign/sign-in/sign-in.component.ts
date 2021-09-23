import { Component, OnInit } from '@angular/core';
import { getDefaultUser, User } from 'models/user.model';

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
  constructor() { }

  ngOnInit(): void {
    this.done = true;
  }
  async passwordEye () {
		this.fieldTextType = !this.fieldTextType;
	}

}
