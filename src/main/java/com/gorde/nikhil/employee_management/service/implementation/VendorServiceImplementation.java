package com.gorde.nikhil.employee_management.service.implementation;

import com.gorde.nikhil.employee_management.entity.Vendor;
import com.gorde.nikhil.employee_management.exception.EntityNotFoundException;
import com.gorde.nikhil.employee_management.repository.VendorRepository;
import com.gorde.nikhil.employee_management.service.VendorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class VendorServiceImplementation implements VendorService {
    private final VendorRepository repository;

    public VendorServiceImplementation(VendorRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Vendor> getAllVendors() {
        return repository.findAll();
    }

    @Override
    public Vendor getVendorById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Vendor with id %s not found".formatted(id)));
    }

    @Override
    public Vendor saveVendor(Vendor vendor) {
        return repository.save(vendor);
    }

    @Override
    public Vendor updateVendor(Vendor vendor) {
        return repository.save(vendor);
    }

    @Override
    public void deleteVendorById(UUID id) {
        repository.deleteById(id);
    }
}
