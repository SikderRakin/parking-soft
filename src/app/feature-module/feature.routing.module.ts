import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleSaveComponent } from './pages/vehicle-save/vehicle-save.component';

const routes: Routes = [
  {
    path: 'vehicle-save',
    component: VehicleSaveComponent,
    data: {
      title: 'Vehicle Save',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
