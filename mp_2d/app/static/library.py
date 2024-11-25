from org.transcrypt.stubs.browser import *
import random

def gen_random_int(number, seed):
	random.seed(seed)
	arr = [i for i in range(number)]
	random.shuffle(arr)
	return arr

def generate():
	number = 10
	seed = 200

	# call gen_random_int() with the given number and seed
	# store it to the variable array
	array = gen_random_int(number, seed)

	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.

	array_str = ','.join(map(str, array)) + '.'

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str

def bubble_sort(array: list[int]) -> None:
	n = len(array)
	swapped = True
	while swapped:
		swapped = False
		new_n = 0
		for i in range(1, n):
			if array[i-1] > array[i]:
				array[i-1], array[i] = array[i], array[i-1]
				new_n = i
				swapped = True
		n = new_n

def insertion_sort(array: list[int]) -> None:
	n = len(array)

	for outer_index in range(1, n):
		inner_index = outer_index
		temp = array[outer_index]
		while inner_index > 0 and array[inner_index-1] > temp:
			array[inner_index] = array[inner_index-1]
			inner_index -= 1
		array[inner_index] = temp

def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the "generate" HTML id, use document.getElementById(id).innerHTML
		- create a list of integers from the string of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	num_str = document.getElementById("generate").innerHTML
	array = list(map(int, num_str.strip('.').split(',')))
	bubble_sort(array)

	array_str = ','.join(map(str, array)) + '.'
	
	document.getElementById("sorted").innerHTML = array_str
	
def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	console.log(value)

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return

	# Your code should start from here
	# store the final string to the variable array_str
	array = list(map(int, value.split(',')))
	insertion_sort(array)

	array_str = ','.join(array)

	document.getElementById("sorted").innerHTML = array_str


