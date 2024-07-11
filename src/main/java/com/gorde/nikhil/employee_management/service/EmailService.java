package com.gorde.nikhil.employee_management.service;

import com.gorde.nikhil.employee_management.entity.Email;

import java.util.List;

public interface EmailService {
    List<Email> getAllEmails();

    Email createEmail(Email email);
}
