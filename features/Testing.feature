Feature: Testing
  As a grunt-cucumber-js dev
  I want a Testing.feature file
  So that I can test the cucumber-js-task

  @dorun
  Scenario: A test scenario
    Given I have the number 1 and 3
    When I add them together
    Then I should have 4

  @anotherdorun
  Scenario: Another test scenario
    Given I have the number 1 and 3
    When I add them together
    Then I should have 4

  Scenario: A test scenario that should be omitted because it doesnt have tag
    Given I have the number 1 and 3
    When I add them together
    Then I should have 100

  @dontrun1
  Scenario: Should Not Run - always fails
    Given I have the number 1 and 4
    When I add them together
    Then I should have 3

  @dontrun2
  Scenario: Should Not Run - always fails
    Given I have the number 1 and 5
    When I add them together
    Then I should have 3
