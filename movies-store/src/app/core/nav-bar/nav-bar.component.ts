import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public items: MenuItem[] = [];
  constructor() { }

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
      },
      {
        label: 'User',
        style: { 'margin-left': 'auto', float: 'right', color: 'white' },
        icon: 'pi pi-user nav-user',
        items: [{
          label: 'Sign In',
          routerLink: '/signIn',
          visible: true,
          icon: 'pi pi-power-on',
        }, {
          label: 'Sign Out',
          icon: 'pi pi-power-off',
        }],
      }
    ]
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