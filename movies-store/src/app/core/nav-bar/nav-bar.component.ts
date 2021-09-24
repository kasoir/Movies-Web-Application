import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public items: MenuItem[] = [];
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
				visible: true,
      },
      {
        label: 'Movies',
        routerLink: '/movies',
				visible: true,
      },
      {
        label: 'Administration',
        visible: (this.authService.user.isAdmin),
      },
      {
        label: this.authService.user.name,
        style: { 'margin-left': 'auto', float: 'right', color: 'white' },
        icon: 'pi pi-user nav-user',
        items: [{
          label: 'Sign In',
          routerLink: '/signIn',
          visible: true,
          icon: 'pi pi-power-on',
        }, {
          label: 'Sign Out',
          command: () => this.signout(),
          icon: 'pi pi-power-off',
        }],
      }
    ]
  }
  public signout = async () => {
		await this.authService.signOutUser();
		localStorage.clear();
		window.location.reload();
	}

}
/**
 * {
        label: 'Profile',
        style: { 'margin-left': 'auto', float: 'right', color: 'white' },
        icon: 'pi pi-user nav-user',
        items: [{
          label: 'Profile',
          routerLink: '/profile',
          visible: true,
          icon: 'pi pi-user-edit',
        }, {
          label: 'Sign Out',
          icon: 'pi pi-power-off',
        }],
      }
 */