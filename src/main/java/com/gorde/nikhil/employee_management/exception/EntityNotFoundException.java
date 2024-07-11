package com.gorde.nikhil.employee_management.exception;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(String message) {
        super(message);
        log.error(message);
    }

    public EntityNotFoundException(String message, Throwable throwable) {
        super(message, throwable);
        log.error(message);
    }
}
