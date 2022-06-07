package com.project.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mybatis.spring.boot.test.autoconfigure.AutoConfigureMybatis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@ExtendWith(SpringExtension.class)
@WebMvcTest(RegistrationController.class)
@AutoConfigureMybatis
public class RegistrationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private RegistrationService registrationService;

    @Captor
    private ArgumentCaptor<RegistrationRequest> argumentCaptor;

    @Test
    public void postingANewMemberRegistrationShouldCreateANewMemberEntryInDatabase() throws Exception {

        RegistrationRequest registrationRequest = new RegistrationRequest();
        registrationRequest.setFirstName("Yasir");
        registrationRequest.setMiddleNames("Kamal Mohamed Hamad");
        registrationRequest.setSurName("Satti");
//        registrationRequest.setDateOfBirth(06/04/1972);
        registrationRequest.setEmail("yassir_satti@hotmail.com");
        registrationRequest.setAddress1("7 Upland Drive");
        registrationRequest.setAddress2("Little Hulton");
        registrationRequest.setCityTown("Manchester");
        registrationRequest.setPostcode("M38 9UD");
        registrationRequest.setPassword("230e9i@");

        when(registrationService.createNewRegistration(argumentCaptor.capture()))
                .thenReturn(1L);

        this.mockMvc
                .perform(post("http://localhost/api/registration/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(registrationRequest))
                )
                .andExpect(status().isCreated())
                .andExpect(header().exists("Location"))
                .andExpect(header().string("Location", "http://localhost/api/registration/1"));

        assertThat(argumentCaptor.getValue().getFirstName(), is("Yasir"));
        assertThat(argumentCaptor.getValue().getMiddleNames(), is("Kamal Mohamed Hamad"));
        assertThat(argumentCaptor.getValue().getSurName(), is("Satti"));
//      assertThat(argumentCaptor.getValue().getDateOfBirth(06/04/1972);
        assertThat(argumentCaptor.getValue().getEmail(), is("yassir_satti@hotmail.com"));
        assertThat(argumentCaptor.getValue().getAddress1(), is("7 Upland Drive"));
        assertThat(argumentCaptor.getValue().getAddress2(), is("Little Hulton"));
        assertThat(argumentCaptor.getValue().getCityTown(), is("Manchester"));
        assertThat(argumentCaptor.getValue().getPostcode(), is("M38 9UD"));
        assertThat(argumentCaptor.getValue().getPassword(), is("230e9i@"));

    }

    @Test
    public void allRegistrationsShouldReturnOneRegistration() throws Exception {

        Registration registration = new Registration(
                "Yasir",
                "Kamal Mohamed Hamad",
                "Satti",
                "yassir_satti@hotmail.com",
                "7 Upland Drive",
                "Little Hulton",
                "Manchester",
                "M38 9UD",
                "230e9i@");

        List<Registration> reg = new ArrayList<>();
        reg.add(registration);
        when(registrationService.getAllRegistrations())
                .thenReturn(reg);

        this.mockMvc
                .perform(get("/api/registration"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].firstName", is("Yasir")));
    }

    @Test
    public void getRegistrationWithUnkKnownIdShouldReturn404Error() throws Exception {

        when(registrationService.getRegistrationById(24L))
                .thenThrow(new RegistrationNotFoundException("Registration with id '24' not found"));

        this.mockMvc
                .perform(get("/api/Registration/24"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateRegistrationWithKnownIdShouldUpdateTheRegistration() throws Exception {

        RegistrationRequest registrationRequest = new RegistrationRequest();
        registrationRequest.setFirstName("Rittal");
        registrationRequest.setMiddleNames("Kamal Mohamed Hamad");
        registrationRequest.setSurName("Satti");
//        registrationRequest.setDateOfBirth(06/04/1972);
        registrationRequest.setEmail("rittalsatti@hotmail.com");
        registrationRequest.setAddress1("7 Upland Drive");
        registrationRequest.setAddress2("Little Hulton");
        registrationRequest.setCityTown("Manchester");
        registrationRequest.setPostcode("M38 9UD");
        registrationRequest.setPassword("230e9i@");

        when(registrationService.updateRegistration(eq(1L), argumentCaptor.capture()))
                .thenReturn((createRegistration(
                        1L,
                        "Rittal",
                        "Kamal Mohamed Hamad",
                        "Satti",
                        "rittal_satti@hotmail.com",
                        "7 Upland Drive",
                        "Little Hulton",
                        "Manchester",
                        "M38 9UD",
                        "230e9i@"
                )));

        this.mockMvc
                .perform(put("http://localhost:8080/api/registration/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(registrationRequest))
                )
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(content().string("1"));

        assertThat(argumentCaptor.getValue().getFirstName(), is("Rittal"));
        assertThat(argumentCaptor.getValue().getMiddleNames(), is("Kamal Mohamed Hamad"));
        assertThat(argumentCaptor.getValue().getSurName(), is("Satti"));
//      assertThat(argumentCaptor.getValue().getDateOfBirth(06/04/1972);
        assertThat(argumentCaptor.getValue().getEmail(), is("rittalsatti@hotmail.com"));
        assertThat(argumentCaptor.getValue().getAddress1(), is("7 Upland Drive"));
        assertThat(argumentCaptor.getValue().getAddress2(), is("Little Hulton"));
        assertThat(argumentCaptor.getValue().getCityTown(), is("Manchester"));
        assertThat(argumentCaptor.getValue().getPostcode(), is("M38 9UD"));
        assertThat(argumentCaptor.getValue().getPassword(), is("230e9i@"));
    }

    //TODO - Use same methodology used here for the deletion test that is in the resttemplate test

    private long createRegistration(long id,
                                            String firstName,
                                            String middleNames,
                                            String surName,
                                            String email,
                                            String address1,
                                            String address2,
                                            String cityTown,
                                            String postcode,
                                            String password) {
        return 1L;
    }
}
