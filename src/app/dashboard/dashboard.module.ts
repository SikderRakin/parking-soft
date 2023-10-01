import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared-module';
import { DasboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [DashboardComponent, CardsComponent],
  imports: [SharedModule, DasboardRoutingModule],
})
export class DashboardModule {}
