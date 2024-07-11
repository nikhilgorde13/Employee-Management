package com.gorde.nikhil.employee_management.repository;

import com.gorde.nikhil.employee_management.entity.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface EmailRepository extends JpaRepository<Email, UUID> {
}
