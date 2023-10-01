import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  config: MatSnackBarConfig = {
    duration: 1000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
  };
  constructor(private matSnackBar: MatSnackBar, private zone: NgZone) {}

  success(message: string) {
    this.config['panelClass'] = ['notification', 'success'];
    this.matSnackBar.open(message, '', this.config);
  }

  warn(message: string) {
    this.config['panelClass'] = ['notification', 'warn'];
    this.zone.run(() => {
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      this.matSnackBar.open(message, 'x', this.config);
    });
  }
}
