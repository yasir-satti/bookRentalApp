package com.project.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/registration")
public class RegistrationController {

    RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    public ResponseEntity<Void> createNewRegistration(
            @Valid @RequestBody RegistrationRequest registrationRequest, UriComponentsBuilder uriComponentsBuilder) {
        Long id = registrationService.createNewRegistration(registrationRequest);

        System.out.println("id...." + id.toString());


        UriComponents uriComponents = uriComponentsBuilder.path("api/registration/{id}").buildAndExpand(id);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        ResponseEntity<Void> response = new ResponseEntity<>(headers, HttpStatus.CREATED);

        System.out.println("Create new responseEntity....");
        System.out.println(response);

        return response;
    }

    @GetMapping
    public ResponseEntity<List<Registration>> getAllRegistrations() {
        ResponseEntity<List<Registration>> response = ResponseEntity.ok(registrationService.getAllRegistrations());

        System.out.println("get All responseEntity....");
        System.out.println(response);

//        return = ResponseEntity.ok(registrationService.getAllRegistrations());
        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Registration> getRegistrationById(
            @PathVariable("id") Long id) {

        ResponseEntity<Registration> response =  ResponseEntity.ok(registrationService.getRegistrationById(id));

        System.out.println("get by Id responseEntity....");
        System.out.println(response);

//        return ResponseEntity.ok(registrationService.getRegistrationById(id));

        return response;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateRegistration(
        @PathVariable("id") Long id, @Valid @RequestBody RegistrationRequest registrationRequest) {

        ResponseEntity<Long> response = ResponseEntity.ok(registrationService.updateRegistration(id, registrationRequest));

        System.out.println("update by Id responseEntity....");
        System.out.println(response);


//        return ResponseEntity.ok(registrationService.updateRegistration(id, registrationRequest));

        return response;

    }
    //    public ResponseEntity<Long> updateRegistration(


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegistration(
            @PathVariable("id") Long id) {
        registrationService.deleteRegistrationById(id);

        ResponseEntity<Void> response =  ResponseEntity.ok().build();

        System.out.println("delete by Id responseEntity....");
        System.out.println(response);

//        return ResponseEntity.ok().build();

        return response;
    }
}
