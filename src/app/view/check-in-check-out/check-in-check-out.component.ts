import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance.service';
import { subscribe } from 'diagnostics_channel';

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

  selectedEmployee!: Employee;
  constructor(private employeeService: EmployeeService, private attendanceSerive: AttendanceService) {
  }

  onSelect(event: any) {
    this.selectedEmployee = event;
  }
  async ngOnInit() {
    this.getEomployee();
  }

  async getEomployee() {
    (await this.employeeService.getEmployees()).subscribe(val => { this.employee = val; })
  }

  async checkIn() {
    var val = (await this.attendanceSerive.checkIn(this.selectedEmployee.id, this.checkInTime)).subscribe(val => {
      console.log(val);
    });


  }



}
