from behave import step
from testData import newRegistration
from utils.apiUtils import callApi
import json


@step('I make "{action}" call')
def step_impl(context, action):
    apiBaseUrl = context.config.userdata['apiBaseUrl']
    headers = {'content-type': context.config.userdata['contentType']}
    id = '63'
    if action == 'create':
        body = {
            "firstName": "Yasir",
            "middleNames": "Kamal M H",
            "surName": "Satti",
            "email": "y@and.digial",
            "address1": "Bloc",
            "address2": "17 Marble Street",
            "cityTown": "Manchester",
            "postcode": "M2 3WA",
            "password": "12039eU2js92#"
        }
        url = apiBaseUrl + 'registration'
    if action == 'find':
        body = {}
        url = apiBaseUrl + 'registration/' + id
    if action == 'update':
        body = {
            "firstName": "Yasir",
            "middleNames": "Kamal M H",
            "surName": "Satti",
            "email": "s@and.digial",
            "address1": "Block",
            "address2": "17 Marble Street",
            "cityTown": "Manchester",
            "postcode": "M2 3WA",
            "password": "12039eU2js92#"
        }
        url = apiBaseUrl + 'registration/' + id
    if action == 'delete':
        body = {}
        url = apiBaseUrl + 'registration/' + id
    context.response = callApi(url, body, headers, action)

    
@step('I should get a response with status code "{status_code}"')
def step_impl(context, status_code):
    resp = context.response
    assert resp.status_code == int(
        status_code), f"expected {status_code} but returned {resp.status_code}"
