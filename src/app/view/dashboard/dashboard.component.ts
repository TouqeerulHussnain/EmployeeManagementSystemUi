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
  selectedDate: string = new Date().toISOString();


  constructor(private reportService: ReportServiceService) {

  }
  async ngOnInit() {
    console.log("showing the")
    this.fetchResult();
    // await this.initialLoad();
  }

  fetchResult() {
    this.reportService.getReports(this.selectedDate).subscribe({
      next: (val) => {
        this.report = val;
      }
    });
  }



}
