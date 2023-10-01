import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { VehicleModel } from '@app/feature-module/models/vehicle-model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  public displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'licenseNo',
    'entryTime',
    'exitTime',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<VehicleModel>();
  constructor(private router: Router) {}
  ngOnInit(): void {
    let vehicleInfoList = [];
    vehicleInfoList = JSON.parse(localStorage.getItem('vehicleInfo'));
    this.dataSource = new MatTableDataSource<VehicleModel>(vehicleInfoList);
  }

  public editItem(item: VehicleModel) {
    this.router.navigate([`/vehicle/edit/${item.id}`]);
  }
}
