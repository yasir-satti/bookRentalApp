from selenium.webdriver import ActionChains

from features.pageobjects.CommonPage import CommonPage
from testData.newRegistration import registrationData


class InputRegistrationPage(CommonPage):
    
    def __init__(self, driver):
        super().__init__(driver)
        
    
    def enterData(self, valueKey, locator):
        el = self.driver.find_element_by_xpath(locator)
        actions = ActionChains(self.driver)
        actions.click(el).perform()
        self.setElementData(locator, registrationData[valueKey])
        
    def setElementData(self, locator, value):
        self.type(locator, value)