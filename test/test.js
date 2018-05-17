import test from 'ava';
import {fibonacci, compare, sortLocale} from '../src/utils/utils.js';

test('main', t => {
    // 断言
    t.is(fibonacci(10), 10);
});       


test('compare', t => {
	var array = ['愛小明','John','KO','剝小樂','Matty','杜tommy', ' '];
	var arrayResult = [ ' ','愛小明','剝小樂','杜tommy','John','KO','Matty'];

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