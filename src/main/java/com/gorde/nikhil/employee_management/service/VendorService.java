package com.gorde.nikhil.employee_management.service;

import com.gorde.nikhil.employee_management.entity.Vendor;

import java.util.List;
import java.util.UUID;

public interface VendorService {
    List<Vendor> getAllVendors();

    Vendor getVendorById(UUID id);

    Vendor saveVendor(Vendor vendor);

    Vendor updateVendor(Vendor vendor);

    void deleteVendorById(UUID id);
}
