import test from 'ava';
import {fibonacci} from '../src/base/utils.js';
import {compare} from '../src/base/utils.js';

test('main', t => {
    // 断言
    t.is(fibonacci(10), 55);
});       


test('compare', t => {
	var array = ['张','高','王','赵'];
	var arrayResult = ['高','王','张','赵'];

	var result = array.sort(compare);
	for (var i = result.length - 1; i >= 0; i--) {
		t.is(result[i] , arrayResult[i]);
	}
});