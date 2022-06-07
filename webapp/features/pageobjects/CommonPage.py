from configparser import ConfigParser
import logging
from utils.LogUtil import Logger
from features.pageobjects.locators import locatorsRegistration

log = Logger(__name__, logging.INFO)


class CommonPage:
    global config
    config = ConfigParser()
    config.read('behave.ini')

    def __init__(self, driver):
        self.driver = driver

    def open(self, url):
        self.driver.get(url)
        log.logger.info("Opened url " + str(url))
        
    
    def type(self, locator, value):
        self.driver.find_element_by_xpath(locator).send_keys(value)
        log.logger.info("Typing in an element: " + str(locator) + " value entered as : " + str(value))
        
        
    def click(self, locator):
        log.logger.info("Clicking on an element: " + str(locator))
        button = self.driver.find_element_by_xpath(locator)
        self.driver.execute_script("arguments[0].click();", button)
