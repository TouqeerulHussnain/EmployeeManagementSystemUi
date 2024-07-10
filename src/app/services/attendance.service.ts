import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }


  async checkIn(empId: string, time: Date) {
    var result = await this.http.post(`https://localhost:7252/api/Attendance/CheckIn?empId=${empId}&checkInTime=${time.toISOString()}&forDate=${time.toISOString()}`, {}

    );
    return result;
  }
  async checkOut(empId: string, time: Date) {
    var result = await this.http.post(`https://localhost:7252/api/Attendance/CheckOut??empId=${empId}&checkOutTime=${time.toISOString()}&forDate=${time.toISOString()}`, {}

    );//https://localhost:7252/api/Attendance/CheckOut?empId=a73d26fc-376d-4551-be61-3efc40a5e0e6&checkOutTime=2024-07-10T14%3A24%3A26.282Z
    return result;
  }

}
