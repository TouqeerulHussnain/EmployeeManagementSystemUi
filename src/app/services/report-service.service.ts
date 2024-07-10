import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttendanceReport } from '../model/attendance-report';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private http: HttpClient) { }

  async getReports(date: Date): Promise<Observable<AttendanceReport[]>> {

    return await this.http.get<AttendanceReport[]>(`https://localhost:7252/api/Attendance/GetAttendanceReportByDate?dateTime=${date}`);
  }

}
