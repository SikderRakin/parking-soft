import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getLocalStorageData() {
    return JSON.parse(localStorage.getItem('vehicleInfo'));
  }
}
