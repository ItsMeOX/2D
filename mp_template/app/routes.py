from app import application
from flask import render_template, flash, redirect, url_for
from werkzeug.urls import url_parse
from flask import request 

@application.route('/')
@application.route('/index')
def index():
	return render_template('index.html', title='DDW - 2D Final Project - Group 7')

