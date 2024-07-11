import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }


  async checkIn(empId: string, time: Date) {
    var result = await this.http.post(`https://localhost:7252/api/Attendance/CheckIn?empId=${empId}&checkInTime=${time.toISOString()}&forDate=${time.toISOString()}`, {});
    return result;
  }
  async checkOut(empId: string, time: Date) {
    var result = await this.http.post(`https://localhost:7252/api/Attendance/CheckOut?empId=${empId}&checkOutTime=${time.toISOString()}&forDate=${time.toISOString()}`, {});
    return result;
  }

}
