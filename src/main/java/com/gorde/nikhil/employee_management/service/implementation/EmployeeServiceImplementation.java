package com.gorde.nikhil.employee_management.service.implementation;

import com.gorde.nikhil.employee_management.entity.Employee;
import com.gorde.nikhil.employee_management.exception.EntityNotFoundException;
import com.gorde.nikhil.employee_management.repository.EmployeeRepository;
import com.gorde.nikhil.employee_management.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeServiceImplementation implements EmployeeService {
    private final EmployeeRepository repository;

    public EmployeeServiceImplementation(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    @Override
    public Employee getEmployeeById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Employee with id %s not found".formatted(id)));
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        return repository.save(employee);
    }

    @Override
    public void deleteEmployeeById(UUID id) {
        repository.deleteById(id);
    }
}
