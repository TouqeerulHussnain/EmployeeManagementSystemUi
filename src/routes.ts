import { Routes } from "@angular/router";
import { DashboardComponent } from "./app/view/dashboard/dashboard.component";
import { EmployeeManagementComponent } from "./app/view/employee-management/employee-management.component";
import { CheckInCheckOutComponent } from "./app/view/check-in-check-out/check-in-check-out.component";
import { AddEditEmployeeComponent } from "./app/view/add-edit-employee/add-edit-employee.component";
import { AtendanceReportComponent as AttendanceReportComponent } from "./app/view/atendance-report/atendance-report.component";
import { AddEmployeeComponent } from "./app/view/add-employee/add-employee.component";

const routeConfig: Routes = [
    {
        path: "",
        component: DashboardComponent,
        title: "Dashboard"
    },
    {
        path: "employeeList",
        component: EmployeeManagementComponent,
        title: "Employee List"
    },
    {
        path: "checkInOut",
        component: CheckInCheckOutComponent,
        title: "Check In and Out"
    },
    {
        path: "attendance",
        component: AttendanceReportComponent,
        title: "Attendance"
    },
    {
        path: "addEdit/:id",
        component: AddEditEmployeeComponent,
        title: "Add Or Edit"
    },
    {
        path: "addEmployee",
        component: AddEmployeeComponent,
        title: "Add Employee"
    }
];
export default routeConfig