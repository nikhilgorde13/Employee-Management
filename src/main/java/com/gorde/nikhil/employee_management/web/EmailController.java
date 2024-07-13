package com.gorde.nikhil.employee_management.web;

import com.gorde.nikhil.employee_management.entity.Email;
import com.gorde.nikhil.employee_management.service.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/management/email")
@CrossOrigin
public class EmailController {
    private final EmailService service;

    public EmailController(EmailService service) {
        this.service = service;
    }
    
    @GetMapping("all")
    public ResponseEntity<List<Email>> getAllEmails() {
        return ResponseEntity.ok(service.getAllEmails());
    }

    @PostMapping
    public ResponseEntity<Email> createEmail(@RequestBody Email email) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.createEmail(email));
    }

}
