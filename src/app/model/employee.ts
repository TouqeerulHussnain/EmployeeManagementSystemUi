import { Attendance } from "./attendence";

export interface Employee {
    id?: string,
    name: string,
    department: string,
    email: string,
    attendance?: Attendance[],
}