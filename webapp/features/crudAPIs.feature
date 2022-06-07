@api

Feature: CRUD APIs

    @registration
    Scenario: API calls (create, find, update and delete)
        When I make "create" call
        Then I should get a response with status code "201"
        When I make "find" call
        Then I should get a response with status code "200"
        When I make "update" call
        Then I should get a response with status code "200"
        When I make "delete" call
        Then I should get a response with status code "200"