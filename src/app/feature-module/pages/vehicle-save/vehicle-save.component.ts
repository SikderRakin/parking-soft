import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidInputPattern } from 'src/app/core/validators';
import { VehicleConstant } from '../../constants/vehicle.constant';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '@app/core/services/snackbar.service';
@Component({
  selector: 'app-vehicle-save',
  templateUrl: './vehicle-save.component.html',
  styleUrls: ['./vehicle-save.component.css'],
})
export class VehicleSaveComponent implements OnInit {
  public vehicleForm!: FormGroup;
  public vehicleType: any;
  public status: any;

  @ViewChild('picker') picker: any;
  @ViewChild('picker1') picker1: any;
  public date!: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = true;
  public minDate!: moment.Moment;
  public maxDate!: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public params: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.params['id'];
    this.vehicleType = VehicleConstant.VEHICLE_TYPE;
    this.status = VehicleConstant.STATUS;

    this.vehicleForm = this.fb.group({
      licenseNo: ['', [Validators.required]],
      vehicleTypes: ['', [Validators.required]],
      ownerName: ['', [Validators.required]],
      ownerPhone: [
        '',
        [Validators.required, Validators.pattern(ValidInputPattern.phone)],
      ],
      ownerAddress: ['', []],
      entryTime: ['', []],
      exitTime: ['', []],
      status: ['in', []],
      charge: [0, [Validators.required]],
    });
    if (this.params) {
      this.patchForm();
    }
  }

  public onSubmit() {
    let vehicleInfoList = [];
    vehicleInfoList = JSON.parse(localStorage.getItem('vehicleInfo'));
    if (this.params) {
      const index = vehicleInfoList.findIndex(
        (obj) => +obj.id === +this.params
      );
      //If the object with the specified ID is found (index is not -1), replace it with the new object
      if (index !== -1) {
        let body = {
          id: this.params,
          ...this.vehicleForm.value,
        };
        vehicleInfoList[index] = body;
        localStorage.setItem('vehicleInfo', JSON.stringify(vehicleInfoList));
        this.snackbar.success(VehicleConstant.UPDATE_MESSAGE);
        this.router.navigate([`/vehicle/list`]);
      } else {
        // Handle the case where the object with the specified ID was not found
      }
    } else {
      let id = 0;
      if (vehicleInfoList.length > 0) {
        id = vehicleInfoList.length;
      }
      let body = {
        id,
        ...this.vehicleForm.value,
      };
      vehicleInfoList.push(body);
      localStorage.setItem('vehicleInfo', JSON.stringify(vehicleInfoList));
      this.snackbar.success(VehicleConstant.SAVE_MESSAGE);
      this.router.navigate([`/vehicle/list`]);
    }
    this.vehicleForm.reset();
  }

  public patchForm() {
    let vehicleInfoList = [];
    vehicleInfoList = JSON.parse(localStorage.getItem('vehicleInfo'));
    const vehicleObj = vehicleInfoList.find(
      (item) => +item.id === +this.params
    );
    if (!vehicleObj) {
      return this.snackbar.warn(VehicleConstant.NO_ITEM_FOUND);
    }
    this.vehicleForm.patchValue({
      licenseNo: vehicleObj?.licenseNo || '',
      vehicleTypes: vehicleObj?.vehicleTypes || '',
      ownerName: vehicleObj?.ownerName || '',
      ownerPhone: vehicleObj?.ownerPhone || '',
      ownerAddress: vehicleObj?.ownerAddress || '',
      entryTime: vehicleObj?.entryTime || null,
      exitTime: vehicleObj?.exitTime || null,
      status: vehicleObj?.status || 'in',
      charge: vehicleObj?.charge || 0,
    });
  }
}
// const idToFind = 2; // Replace with the desired ID you want to find
// const newObj = {
//   "id": idToFind,
//   "licenseNo": "newLicenseNo",
//   // ... other properties of the new object
// };

// // Find the index of the object with the specified ID
// const index = data.findIndex(obj => obj.id === idToFind);

// // If the object with the specified ID is found (index is not -1), replace it with the new object
// if (index !== -1) {
//   data[index] = newObj;
// } else {
//   // Handle the case where the object with the specified ID was not found
//   console.log(`Object with id ${idToFind} not found.`);
// }
