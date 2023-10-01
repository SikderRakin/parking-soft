import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleSaveComponent } from './pages/vehicle-save/vehicle-save.component';
import { DataTableComponent } from './pages/data-table/data-table.component';

const routes: Routes = [
  {
    path: 'save',
    component: VehicleSaveComponent,
    data: {
      title: 'Vehicle Save',
    },
  },
  {
    path: 'edit/:id',
    component: VehicleSaveComponent,
    data: {
      title: 'Vehicle Save',
    },
  },
  {
    path: 'list',
    component: DataTableComponent,
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
