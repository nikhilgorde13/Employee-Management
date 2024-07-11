package com.gorde.nikhil.employee_management.web;

import com.gorde.nikhil.employee_management.entity.Vendor;
import com.gorde.nikhil.employee_management.service.VendorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/management/vendor")
@CrossOrigin
public class VendorController {
    private final VendorService service;

    public VendorController(VendorService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Vendor>> getAllVendors() {
        return ResponseEntity.ok(service.getAllVendors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendor> getVendorById(@PathVariable UUID id) {
        return ResponseEntity.ok(service.getVendorById(id));
    }

    @PostMapping
    public ResponseEntity<Vendor> createVendor(@RequestBody Vendor vendor) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveVendor(vendor));
    }

    @PutMapping
    public ResponseEntity<Vendor> updateVendor(@RequestBody Vendor vendor) {
        return ResponseEntity.ok(service.updateVendor(vendor));
    }

    @DeleteMapping("/{id}")
    public void deleteVendorById(@PathVariable UUID id) {
        service.deleteVendorById(id);
    }
}
