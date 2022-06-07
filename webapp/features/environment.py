import os
import configparser
import allure
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager

from features.pageobjects.CommonPage import CommonPage
from features.pageobjects.InputRegistrationPage import InputRegistrationPage


def before_all(context):

    userdata = context.config.userdata

    if userdata['browser'] == "chrome":
        options = webdriver.ChromeOptions()
        options.add_argument('--ignore-ssl-errors=yes')
        options.add_argument('--ignore-certificate-errors')
        context.driver = webdriver.Chrome(
            options=options, executable_path=ChromeDriverManager().install())

    if userdata['browser'] == "firefox":
        context.driver = webdriver.Firefox(
            executable_path=GeckoDriverManager().install())

    context.baseUrl = userdata["baseUrl"]
    context.inputRegistrationPage = InputRegistrationPage(context.driver)
    context.commonPage = CommonPage(context.driver)







