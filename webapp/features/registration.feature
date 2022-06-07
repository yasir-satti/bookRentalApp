@ui

Feature: Registration page

@registration
Scenario: New customer registration
    When I am on "registration" page
    Then I enter data on new registration page
    Then I click "registration submit" button