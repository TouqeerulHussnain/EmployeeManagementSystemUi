import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css'
})
export class AddEditEmployeeComponent {
  employee: Employee = {
    id: '',
    name: '',
    department: '',
    email: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // assume we have an employee id in the route params
    // const id = this.route.snapshot.paramMap.get('id');
    // this.employeeService.getEmployee(id).subscribe(employee => {
    //   this.employee = employee;
    // });
  }

  updateEmployee(): void {
    // this.employeeService.updateEmployee(this.employee).subscribe(() => {
    //   console.log('Employee updated successfully!');
    // });
  }
}
