import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public items: MenuItem[] = [];
  showBar = false;
  showCase = this.authService?.user ? true : false;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    console.log(this.showCase);
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
        visible: true,
      },
      {
        label: 'Movies',
        style: { 'margin-left': 'auto', float: 'right', color: 'white' },
        visible: true,
        items: [{
          label: 'Movies',
          visible: true,
          routerLink: '/movies',
        }, {
          label: 'Actors',
          visible: true,
          routerLink: '/actors',
        }],
      },
      {
        label: 'Administration',
        routerLink: '/administration',
        visible: (this.authService.user.isAdmin) ? true : false,
      },
      {
        label: this.authService.user.name,
        style: { 'margin-left': 'auto', float: 'right', color: 'white' },
        icon: 'pi pi-user nav-user',
        items: [{
          label: 'Sign In',
          visible: true,
          routerLink: '/signIn',
          icon: 'pi pi-power-on',
        }, {
          label: 'Sign Out',
          visible: (this.authService.user.uid == '') ? true : false,
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