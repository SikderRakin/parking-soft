import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared-module';
import { VehicleSaveComponent } from './pages/vehicle-save/vehicle-save.component';
import { VehicleRoutingModule } from './feature.routing.module';

@NgModule({
  declarations: [VehicleSaveComponent],
  imports: [SharedModule, VehicleRoutingModule],
})
export class FeatureReportModule {}
