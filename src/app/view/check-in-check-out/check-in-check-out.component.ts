import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance.service';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';

@Component({
  selector: 'app-check-in-check-out',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './check-in-check-out.component.html',
  styleUrl: './check-in-check-out.component.css'
})
export class CheckInCheckOutComponent implements OnInit {

  checkInTime: Date = new Date();
  employee: Employee[] = [];
  errorMsg: string = ""

  selectedEmployee!: Employee;
  constructor(private employeeService: EmployeeService, private attendanceSerive: AttendanceService) {
  }

  onSelect(event: Employee) {
    console.log("OnSelect", event.id);
    this.selectedEmployee = event;
  }
  async ngOnInit() {
    this.getEomployee();
  }

  async getEomployee() {
    (await this.employeeService.getEmployees()).subscribe(val => { this.employee = val; })
  }

  async checkIn() {
    var val = (await this.attendanceSerive.checkIn(this.selectedEmployee.id!, this.checkInTime)).subscribe({

      next: (val) => {
        console.log("CheckIn: ", val);

      },
      error: (error) => {
        this.errorMsg = "Already Checked In";
        console.log("something went wrong");
      }
    });

  }
  async checkOut() {
    console.log("checkout is called, Id is :", this.selectedEmployee.id!);
    (await this.attendanceSerive.checkOut(this.selectedEmployee.id!, this.checkInTime)).subscribe({
      next: (val) => {
        console.log("checked out", val);
      },
      error: (val) => {
        console.log("Something went wrong", val);
        this.errorMsg = "Already Checked out";
      }
    });
  }




}
