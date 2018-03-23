import test from 'ava';
import {fibonacci} from '../src/base/utils.js';

test('main', t => {
    // 断言
    t.is(fibonacci(10), 55);
});       
