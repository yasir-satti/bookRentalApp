from urllib import response
import requests
import json


def callApi(url, body, headers, action):
    if action == 'create':
        response = requests.post(url, data=json.dumps(body), headers=headers)
    elif action == 'find':
        response = requests.get(url, data=json.dumps(body), headers=headers)
    elif action == 'update':
        response = requests.put(url, data=json.dumps(body), headers=headers)
    elif action == 'delete':
        response = requests.delete(url, data=json.dumps(body), headers=headers)
    return response