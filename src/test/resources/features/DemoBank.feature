@web @DemoTest
Feature: Demo Bank site - to fetch all data from excel and execute the test for records

  Scenario Outline: To validate whether user see the successful transaction message and reference number generated
    Given User login into Demo Bank site
    When user enter the valid accountNumber and Password
    And Click the Login button
    When User enter the valid pin and click on validate button
    Then User should navigate to Home Page
    And User click on Fund Transfer Tab
    And User inputs the fields <rowQuery> to complete the fund transfer
    And User clicks the FundTransfer button
    And user enter authentication code as <AuthorizationCode> and click validate button
    Then User see success message and reference no will be generated

    Examples:
    | rowQuery | AuthorizationCode |
    | rowQuery1| 123456 		   |
    | rowQuery2| 123456 		   |
    | rowQuery3| 123456 		   |
    | rowQuery4| 123456 		   |
    | rowQuery5| 123456 		   |
