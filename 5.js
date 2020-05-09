const createTriangle = (a, b) => {
    for (var i = 1; i <= b; i++) {
        let str = '';
        for (var j = i; j <= b; j++) {
            str += ' ';
        }
        for (var k = a; k <= i; k++) {
            str += k;
        }
        console.log(str);
    }
}
createTriangle(2, 10);