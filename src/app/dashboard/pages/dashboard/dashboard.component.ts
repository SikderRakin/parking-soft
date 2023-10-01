import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/core/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public todayDateInfo: any = [];
  public ListOfVehicleParkOverTime: any = [];
  public carCount: number = 0;
  public microbusCount: number = 0;
  public truckCount: number = 0;
  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    this.localStorageService.getLocalStorageData();
    if (
      this.localStorageService.getLocalStorageData() &&
      this.localStorageService.getLocalStorageData().length > 0
    ) {
      this.getTodaysData(this.localStorageService.getLocalStorageData());
      this.filterObj(this.localStorageService.getLocalStorageData());
    }
  }

  public getTodaysData(vehicleIdList: any) {
    // Get the current date
    const currentDate = new Date();

    // Function to check if a date is today
    function isToday(date) {
      return date.toDateString() === currentDate.toDateString();
    }

    // Filter objects with exitTime set to today
    this.todayDateInfo = vehicleIdList.filter((item) => {
      if (item.entryTime) {
        const exitTime = new Date(item.entryTime);
        return isToday(exitTime);
      }
      return false;
    });
    this.totalTypes();
  }

  public totalTypes() {
    this.todayDateInfo.forEach((item) => {
      switch (item.vehicleTypes.toLowerCase()) {
        case 'car':
          this.carCount++;
          break;
        case 'microbus':
          this.microbusCount++;
          break;
        case 'truck':
          this.truckCount++;
          break;
        default:
          // Handle other types or cases here if needed
          break;
      }
    });
  }
  // Function to calculate the time difference in hours
  public calculateTimeDifference(entryTime) {
    const currentTime: any = new Date();
    const entryTimeDate: any = new Date(entryTime);
    const timeDifferenceMilliseconds = currentTime - entryTimeDate;
    return timeDifferenceMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
  }

  // Filter objects where the time difference is more than 2 hours
  filterObj(vehicleIdList: any) {
    this.ListOfVehicleParkOverTime = vehicleIdList.filter((item) => {
      if (item.entryTime) {
        const timeDifferenceHours = this.calculateTimeDifference(
          item.entryTime
        );
        return timeDifferenceHours > 2;
      }
      return false;
    });
  }
}
