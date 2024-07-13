import {Box} from "@mui/system";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import {AddEmployee} from "./components/AddEmployee.tsx";
import {TextField} from "@mui/material";
import {AddVendor} from "./components/AddVendor.tsx";

export interface Employee {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    name: string;
    designation: string;
    ctc: number;
    email: string;
    age: number;
    joiningDate: Date;
    phoneNumber: string;
    address: string;
    gender: string;
    department: string;
    birthdate: Date;
    employeeId: string;
    reportsTo: string;
    deleted: boolean;
}

export default function EmployeeDataGrid() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [filtredEmployee, setFiltredEmployee] = useState<Employee[]>([]);
    useEffect(() => {
        fetchAndSetEmployees();
    }, []);
    const fetchAndSetEmployees = async () => {
       await fetch("http://localhost:8080/api/v1/management/employee/all").then((response) => response.json()).then((data)=>{
            setEmployees(data as unknown as Employee[]);
           setFiltredEmployee(data as unknown as Employee[])
        })
    }
    const columns = [
        {field: 'id', headerName: 'ID', width: 150},
        {field: 'createdAt', headerName: 'Created At', width: 180},
        {field: 'updatedAt', headerName: 'Updated At', width: 180},
        {field: 'createdBy', headerName: 'Created By', width: 150},
        {field: 'updatedBy', headerName: 'Updated By', width: 150},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'designation', headerName: 'Designation', width: 150},
        {field: 'ctc', headerName: 'CTC', type: 'number', width: 120},
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'age', headerName: 'Age', type: 'number', width: 90},
        {field: 'joiningDate', headerName: 'Joining Date', width: 150},
        {field: 'phoneNumber', headerName: 'Phone Number', width: 150},
        {field: 'address', headerName: 'Address', width: 200},
        {field: 'gender', headerName: 'Gender', width: 120},
        {field: 'department', headerName: 'Department', width: 150},
        {field: 'birthdate', headerName: 'Birthdate', width: 150},
        {field: 'employeeId', headerName: 'Employee ID', width: 150},
        {field: 'reportsTo', headerName: 'Reports To', width: 150},
        {field: 'deleted', headerName: 'Deleted', type: 'boolean', width: 110},
    ];
        const filterEmployee=(value:string)=>{
            employees.filter(employee => employee.name === value)
        }
    return (
        <Box>
          <Box sx={{display:"flex",justifyContent:"flex-end"}}>
              <AddVendor/>
              <AddEmployee callback={fetchAndSetEmployees}/>
          <TextField size="small"
          onChange={(e)=>filterEmployee(e.target.value)}
          />
          </Box>  <DataGrid
            rows={filtredEmployee}
            columns={columns as GridColDef<Employee>[]}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        </Box>
    );
}