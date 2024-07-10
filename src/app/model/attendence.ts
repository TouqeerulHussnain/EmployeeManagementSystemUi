import { Employee } from "./employee";


export interface Attendance {
    id: string,
    date?: Date,
    checkInTime?: Date,
    checkOutTime?: Date,
    employeeId: string,
    employee?: Employee,
}
