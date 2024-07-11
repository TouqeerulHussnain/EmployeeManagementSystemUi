import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AttendanceService } from '../../services/attendance.service';
import { Employee } from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent implements OnInit {
  ShowResultEmployees() {

  }

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {


  }
  async ngOnInit() {
    console.log("Call employee");
    this.getEmployees();
    console.log(this.employees)
  }

  async getEmployees() {
    (await this.employeeService.getEmployees()).subscribe(val => {
      this.employees = val;
      console.log("subscribe value", val);
    });
  }

  async deleteEmp(id: string) {
    console.log("delete called start id:", id);
    (await this.employeeService.deleteEmployees(id)).subscribe(val => {
      console.log(val);
    });
    this.getEmployees();
    console.log("delete called endr");
  }



}
