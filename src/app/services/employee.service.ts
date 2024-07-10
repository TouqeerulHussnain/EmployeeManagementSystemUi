import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  async updateEmployee(employee: Employee) {
    // var result = await this.http.put<Employee>("");
  }

  constructor(private http: HttpClient) { }
  async getEmployees(): Promise<Observable<Employee[]>> {
    var result = await this.http.get<Employee[]>("https://localhost:7252/api/Employee/GetEmployees");
    console.log("getEmployees");
    console.log(result);
    return result;
  }
  async deleteEmployees(id: string) {
    var result = await this.http.delete<Employee>(`https://localhost:7252/api/Employee/DeleteEmployee?id=${id}`);
    return result;
  }
}
