#!/usr/bin/python3
import os
import requests

def create_extraction(token, extraction_details):
    url = os.getenv('DATAMORPH_EXTRACTION_URL')
    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {token}"}

    try:
        response = requests.post(url, json=extraction_details, headers=headers)
        response.raise_for_status()  # Raises an HTTPError if the response status code is 4XX/5XX
        return response.json()  # Returns the parsed JSON response
    except requests.RequestException as e:
        # Handles any requests-related errors
        print(e)
        return None
