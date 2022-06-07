from xml.sax.xmlreader import Locator
from behave import step
from features.pageobjects.locators import locatorsRegistration    
    
@step('I am on "{page}" page')
def step_impl(context, page):
    print(f"Page == {page}")
    print(f"BASE URL = {context.baseUrl}")
    url = context.baseUrl + '/registration'
    print("URL = " + url)
    context.commonPage.open(url)
    

@step('I click "{button}" button')
def step_impl(context, button):
    if button == 'registration submit':
        locator = locatorsRegistration["submitButton_XPATH"]
        context.commonPage.click(locator)
