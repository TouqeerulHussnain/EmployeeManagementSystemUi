import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css'
})
export class AddEditEmployeeComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  employeeId = "0";
  erroMsg: string = "";


  employeeForm = new FormGroup({
    id: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required])
  });

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employeeId = this.route.snapshot.params['id']
  }

  async ngOnInit() {
    await this.getEmployeeById(this.employeeId)
  }

  async updateEmployee() {
    if (this.employeeForm.valid) {
      console.log('Form is valid');
      let local: Employee = {
        name: this.employeeForm.value.name!,
        department: this.employeeForm.value.department!,
        email: this.employeeForm.value.email!,
        id: this.employeeForm.value.id!
      };
      (await this.employeeService.updateEmployee(local)).subscribe({
        next: (val) => {
          console.log("Update the employe:", val);
          this.router.navigate(['/employeeList']);
        },
        error: (error) => {
          this.erroMsg = "Got Error. Is you email format is valid";
        }
      })
    } else {
      console.log('Form is invalid');
    }
    console.log(this.employeeForm);
  }

  async getEmployeeById(id: string) {
    (await this.employeeService.getEmployeeById(id)).subscribe({
      next: (val) => {
        this.initializaFormGroup(val);
      },
      error: (error) => {
        console.log("No Employee Found for this Id")
      }
    }
    )
  }

  initializaFormGroup(Emp: Employee) {
    this.employeeForm.patchValue({
      name: Emp.name,
      department: Emp.department,
      email: Emp.email,
      id: Emp.id,
    })
  }
}
