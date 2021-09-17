import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
		RouterModule,
		FormsModule,
		NgxMaskModule.forRoot(),
		BsDropdownModule.forRoot(),
		CollapseModule,
		TabsModule.forRoot(),
		MenubarModule,
		MenuModule,
		SharedModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class CoreModule { }
