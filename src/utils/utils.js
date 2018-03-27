
var Pinyin = require('./pinyin');

/**
*  Compare tow chiness word.
*/
var compare = function (val1,val2) {
    //转换为拼音
    val1 = Pinyin.getFullChars(val1).toLowerCase();
    val2 = Pinyin.getFullChars(val2).toLowerCase();
    console.log('val1:' + val1 + '  val2:' + val2);

    // 获取较长的拼音的长度
    var length =  val1.length > val2.length ? val1.length:val2.length ;
    
    // 依次比较字母的unicode码，相等时返回0，小于时返回-1，大于时返回1
    for(var i = 0; i < length; i++ ) {
        var differ = val1.charCodeAt(i) - val2.charCodeAt(i);
        if(differ == 0) {
            continue;
        }else {
            if(val1.charAt(i) == '_' ) {
                return -1;
            }
            console.log('differ:' + differ);
            return differ;
        }
    }    
    if(i == length) {
        return val1.length - val2.length;
    }
}

var fibonacci = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
};


exports.compare = compare;
exports.fibonacci = fibonacci;



