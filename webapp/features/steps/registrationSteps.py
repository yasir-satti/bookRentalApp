from behave import step

from features.pageobjects.InputRegistrationPage import InputRegistrationPage
from features.pageobjects.locators import locatorsRegistration

@step('I enter data on new registration page')
def step_impl(context):
    context.inputRegistrationPage = InputRegistrationPage(context.driver)
    fieldXpath = {
		"firstNameInput": locatorsRegistration["firstNameInput_XPATH"],
	    "middleNamesInput": locatorsRegistration["formMiddleNamesInput_XPATH"],
	    "surnameInput": locatorsRegistration["formSurnameInput_XPATH"],
	    "emailInput": locatorsRegistration["formEmailInput_XPATH"],
	    "retypeEmailInput": locatorsRegistration["formRetypeEmailInput_XPATH"],
	    "address1Input": locatorsRegistration["formAddress1Input_XPATH"],
	    "address2Input": locatorsRegistration["formAddress2Input_XPATH"],
	    "cityTownInput": locatorsRegistration["CityTownInput_XPATH"],
	    "postcodeInput": locatorsRegistration["PostcodeInput_XPATH"],
	    "passwordInput": locatorsRegistration["formPasswordInput_XPATH"],
	    "retypePasswordInput": locatorsRegistration["formRetypePasswordInput_XPATH"]
	}
    for key in fieldXpath:
        context.inputRegistrationPage.enterData(key, fieldXpath[key])