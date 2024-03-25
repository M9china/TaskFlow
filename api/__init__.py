#!/usr/bin/python3
""" Blueprint for API """
from flask import Blueprint

api_routes = Blueprint('api_routes', __name__, url_prefix='/api/v1')

from api.routes import *