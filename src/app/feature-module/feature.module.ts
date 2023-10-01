import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared-module';
import { VehicleSaveComponent } from './pages/vehicle-save/vehicle-save.component';
import { VehicleRoutingModule } from './feature.routing.module';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
} from '@angular-material-components/datetime-picker';
import { DataTableComponent } from './pages/data-table/data-table.component';
@NgModule({
  declarations: [VehicleSaveComponent, DataTableComponent],
  imports: [
    SharedModule,
    VehicleRoutingModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
  ],
})
export class FeatureReportModule {}
