var fibonacci = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
};

// 如果是直接执行 node utils.js，则进入此处
// 如果 utils.js 被其他文件 require，则此处不会执行。
if (require.main === module) {
    
    var n = Number(process.argv[2]);                        
    console.log('fibonacci(' + n + ') is', fibonacci(n));
}

exports.fibonacci = fibonacci;