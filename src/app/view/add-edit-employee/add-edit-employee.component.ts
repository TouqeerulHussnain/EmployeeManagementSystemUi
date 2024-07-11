import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  employee: Employee = {
    id: '',
    name: '',
    department: '',
    email: ''
  };

  employeeForm = new FormGroup({
    id: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    department: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required])
  });





  constructor(private employeeService: EmployeeService) {
    this.employeeId = this.route.snapshot.params['id']
  }

  async ngOnInit() {

    await this.getEmployeeById(this.employeeId)
    // assume we have an employee id in the route params
    // const id = this.route.snapshot.paramMap.get('id');
    // this.employeeService.getEmployee(id).subscribe(employee => {
    //   this.employee = employee;
    // });
  }

  updateEmployee(): void {
    if (this.employeeForm.valid) {
      console.log('Form is valid');
      // Submit the form data
    } else {
      console.log('Form is invalid');
      // Show error messages
      //   Object.keys(this.employeeForm.controls).forEach(key => {
      //     const control = this.employeeForm.controls[key];
      //     if (control.invalid) {
      //       console.log(`${key} is invalid`);
      //       // Show error message for the control
      //     }
      //   }
      // );
    }
    console.log(this.employeeForm);
    // this.employeeService.updateEmployee(this.employee).subscribe(() => {
    //   console.log('Employee updated successfully!');
    // });
  }

  async getEmployeeById(id: string) {

    (await this.employeeService.getEmployeeById(id)).subscribe({
      next: (val) => {
        this.employee = val;
        this.initializaFormGroup(this.employee);
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
