package com.project.service;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class RegistrationRequest {

    @Size(min = 2, max = 30, message
            = "First name must be between 2 and 30 characters")
    private String firstName;

    private String middleNames;

    @Size(min = 2, max = 30, message
            = "Surnmae must be between 2 and 30 characters")
    private String surName;

//    private Date dateOfBirth;

    @Email(message = "Email should be valid")
    private String email;

    @Size(min = 5, max = 30, message
            = "Address 1 must be between 5 and 30 characters")
    private String address1;

    @Size(min = 5, max = 30, message
            = "Address 2 must be between 5 and 30 characters")
    private String address2;

    @Size(min = 5, max = 30, message
            = "City/Town name must be between 5 and 30 characters")
    private String cityTown;

    @Size(min = 6, max = 8, message
            = "Postcode must be between 6 and 8 characters")
    private String postcode;

    @NotEmpty
    private String password;
}
