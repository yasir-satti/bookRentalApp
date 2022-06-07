package com.project.service;

import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RegistrationControllerDeleteTest {

    @LocalServerPort
    int randonServerPort;

    private TestRestTemplate testRestTemplate;

    @BeforeEach
    public void setUp() {

        this.testRestTemplate = new TestRestTemplate();
    }

    @Test
    public void deleteKnownEntityShouldReturn404AfterDeletion() {
        long registrationId = 27;
        String baseUrl = "http://localhost:8080";

        ResponseEntity<JsonNode> firstResult = this.testRestTemplate
                .getForEntity(baseUrl + "/api/registration/" + registrationId, JsonNode.class);

        assertThat(firstResult.getStatusCode(), is(HttpStatus.OK));

        this.testRestTemplate.delete(baseUrl + "/api/registration/" + registrationId);

        ResponseEntity<JsonNode> secondResult = this.testRestTemplate
                .getForEntity(baseUrl + "/api/registration/" + registrationId, JsonNode.class);

        assertThat(secondResult.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }

}
