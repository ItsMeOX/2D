// Transcrypt'ed from Python, 2024-11-25 17:03:12
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	random.seed (seed);
	var arr = (function () {
		var __accu0__ = [];
		for (var i = 0; i < number; i++) {
			__accu0__.append (i);
		}
		return __accu0__;
	}) ();
	random.shuffle (arr);
	return arr;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	var array = gen_random_int (number, seed);
	var array_str = ','.join (map (str, array)) + '.';
	document.getElementById ('generate').innerHTML = array_str;
};
export var bubble_sort = function (array) {
	var n = len (array);
	var swapped = true;
	while (swapped) {
		var swapped = false;
		var new_n = 0;
		for (var i = 1; i < n; i++) {
			if (array [i - 1] > array [i]) {
				var __left0__ = tuple ([array [i], array [i - 1]]);
				array [i - 1] = __left0__ [0];
				array [i] = __left0__ [1];
				var new_n = i;
				var swapped = true;
			}
		}
		var n = new_n;
	}
};
export var insertion_sort = function (array) {
	var n = len (array);
	for (var outer_index = 1; outer_index < n; outer_index++) {
		var inner_index = outer_index;
		var temp = array [outer_index];
		while (inner_index > 0 && array [inner_index - 1] > temp) {
			array [inner_index] = array [inner_index - 1];
			inner_index--;
		}
		array [inner_index] = temp;
	}
};
export var sortnumber1 = function () {
	var num_str = document.getElementById ('generate').innerHTML;
	var array = list (map (int, num_str.strip ('.').py_split (',')));
	bubble_sort (array);
	var array_str = ','.join (map (str, array)) + '.';
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	console.log (value);
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var array = list (map (int, value.py_split (',')));
	insertion_sort (array);
	var array_str = ','.join (array);
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map