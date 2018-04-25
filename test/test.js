import test from 'ava';
import {fibonacci, compare, sortLocale} from '../src/utils/utils.js';

test('main', t => {
    // 断言
    t.is(fibonacci(10), 55);
});       


test('compare', t => {
	var array = ['张小里','高','王','赵啊', '张啊', ' ', '奥'];
	var arrayResult = [' ', '奥', '高','王','张啊', '张小里', '赵啊'];

	var result = sortLocale(array, 'zh-CN');  //= array.sort(compare);
	for (var i = result.length - 1; i >= 0; i--) {
		t.is(result[i] , arrayResult[i]);
	}
});

test('sort', t => {
	var array = ['ŘS', ' ', 'AÉWE', '', 'ÁXCC', 'ÁX', 'BK', 'ÁXC', 'ÁXCB'];
	var arrayResult = ['',' ', 'AÉWE','ÁX', 'ÁXC', 'ÁXCB', 'ÁXCC', 'BK', 'ŘS'];

	var result = sortLocale(array);
	for (var i = result.length - 1; i >= 0; i--) {
		t.is(result[i] , arrayResult[i]);
	}
});