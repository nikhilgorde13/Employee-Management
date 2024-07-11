package com.gorde.nikhil.employee_management.service;

import com.gorde.nikhil.employee_management.entity.Employee;

import java.util.List;
import java.util.UUID;

public interface EmployeeService {
    List<Employee> getAllEmployees();

    Employee getEmployeeById(UUID id);

    Employee saveEmployee(Employee employee);

    Employee updateEmployee(Employee employee);

    void deleteEmployeeById(UUID id);
}
