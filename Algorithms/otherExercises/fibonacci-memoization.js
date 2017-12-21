// visual the stack machanism : http://latentflip.com/loupe/?code=IHZhciBtZW1vID0ge307CiAgICB2YXIgb2JqID0gewogICAgICAgIGNvdW50IDogMAogICAgfTsKICAgIAogICAgCnZhciBmaWJvbmFjY2kgPSAgZnVuY3Rpb24gZihuKSB7CiAgICAgICAgb2JqLmNvdW50KysKCiAgICAgICAgdmFyIHZhbHVlOwoKICAgICAgICBpZiAobiBpbiBtZW1vKSB7CiAgICAgICAgICAgIHZhbHVlID0gbWVtb1tuXTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBpZiAobiA9PT0gMCB8fCBuID09PSAxKXsKICAgICAgICAgICAgICAgIHZhbHVlID0gbjsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlewogICAgICAgICAgICAgICAgdmFsdWUgPSBmKG4gLSAxKSArIGYobiAtIDIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIG1lbW9bbl0gPSB2YWx1ZTsKICAgICAgICB9CgogICAgICAgIHJldHVybiB2YWx1ZTsKICAgIH07CnZhciByZXN1bHQgPSBmaWJvbmFjY2koNSkKY29uc29sZS5sb2cocmVzdWx0KQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// refer : https://www.sitepoint.com/implementing-memoization-in-javascript/

var fibonacci = (function () {
    var memo = {};
    var obj = {
        count : 0
    };
    function f(n) {
        console.log(n)
        obj.count++;var value;

        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(n - 1) + f(n - 2);

            memo[n] = value;
        }

        return value;
    }
    return f;
})();

var ans = fibonacci(6)
// console.log(ans);
