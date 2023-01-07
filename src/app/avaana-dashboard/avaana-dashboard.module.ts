import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AppointmentsTabComponent } from './components/appointments-tab/appointments-tab.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    NavBarComponent,
    ServiceCardComponent,
    AppointmentsTabComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class AvaanaDashboardModule { }
