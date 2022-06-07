package com.project.service;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class Registration {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = true)
    private String middleNames;

    @Column(nullable = false)
    private String surName;

//    @Column(nullable = false)
//    private Date dateOfBirth;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String address1;

    @Column(nullable = false)
    private String address2;

    @Column(nullable = false)
    private String cityTown;

    @Column(nullable = false)
    private String postcode;

    @Column(nullable = false)
    private String password;

    public Registration(String firstName,
                        String middleNames,
                        String surName,
                        String email,
                        String address1,
                        String address2,
                        String cityTown,
                        String postcode,
                        String password
    ) {
        this.firstName = firstName;
        this.middleNames = middleNames;
        this.surName = surName;
        this.email = email;
        this.address1 = address1;
        this.address2 = address2;
        this.cityTown = cityTown;
        this.postcode = postcode;
        this.password = password;
    }
}
