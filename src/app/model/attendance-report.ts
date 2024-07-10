
export interface AttendanceReport {
    employeeId: string,
    name: string,
    attendanceDate?: Date,
    checkInTime?: Date,
    checkOutTime?: Date,
}