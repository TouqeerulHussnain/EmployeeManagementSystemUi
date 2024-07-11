import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {


  constructor(private employeeService: EmployeeService, private router: Router) {


  }

  erroMsg: string = "";

  employeeForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required])
  });

  async AddEmployee() {
    console.log("AddEmployee")
    let employee: Employee = {
      name: this.employeeForm.value.name!,
      department: this.employeeForm.value.department!,
      email: this.employeeForm.value.email!,
    };
    if (this.employeeForm.valid) {
      (await this.employeeService.createEmployee(employee)).subscribe({
        next: (val) => {
          console.log("Added employee", val);
          this.router.navigate(["/employeeList"]);
        },
        error: (error) => {
          console.log("got error in creation of employee");
        }

      })
    } else {
      console.log("form not valid")
    }
  }

}
