import os
from flask import Flask, jsonify
from api.extraction import create_extraction
from api.format import extraction_format
from dotenv import load_dotenv
from . import api_routes

api_token = os.getenv('DATAMORPH_API_TOKEN')


@api_routes.route('/create_extraction', methods=['GET'])
def handle_extraction():
    token = api_token # Replace with your API token
    extraction_details = extraction_format

    extraction_response = create_extraction(token, extraction_details)

    # Check if extraction_response is None or not
    if extraction_response is not None:
        return jsonify(extraction_response), 200
    else:
        return jsonify({"error": "Failed to create extraction"}), 400
