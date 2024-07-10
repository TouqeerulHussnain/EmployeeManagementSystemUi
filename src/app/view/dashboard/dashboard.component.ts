import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportServiceService } from '../../services/report-service.service';
import { CommonModule } from '@angular/common';
import { AttendanceReport } from '../../model/attendance-report';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  report: AttendanceReport[] = [];
  selectedDate!: Date;


  constructor(private reportService: ReportServiceService) {

  }
  ngOnInit(): void {
    this.fetchResult();
  }

  async fetchResult() {
    (await this.reportService.getReports(this.selectedDate)).subscribe(r => {
      this.report = r;
    });
  }

}
