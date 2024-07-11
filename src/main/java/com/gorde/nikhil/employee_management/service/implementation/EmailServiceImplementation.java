package com.gorde.nikhil.employee_management.service.implementation;

import com.gorde.nikhil.employee_management.entity.Email;
import com.gorde.nikhil.employee_management.repository.EmailRepository;
import com.gorde.nikhil.employee_management.service.EmailService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailServiceImplementation implements EmailService {
    private final EmailRepository repository;

    public EmailServiceImplementation(EmailRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Email> getAllEmails() {
        return repository.findAll();
    }

    @Override
    public Email createEmail(Email email) {
        return repository.save(email);
    }
}
