import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  duration = 200;

  constructor(private toastrService: MatSnackBar) { }

  default(title: string, message: string = ""){
    this.toastrService.open(title, message, {
      duration: this.duration,
      panelClass: ['blue-snackbar']
    })
  }

  success(title: string, message: string = ""){
    this.toastrService.open(title, message, {
      duration: this.duration,
      panelClass: ['green-snackbar']
    })
  }

  error(title: string, message: string = ""){
    this.toastrService.open(title, message, {
      duration: this.duration,
      panelClass: ['red-snackbar']
    })
  }
}
