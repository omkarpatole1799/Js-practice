console.log("Welcome to fibonacchi generator");


function fibonacchiGenerator(number) {
    var a = 0;
    var b = 1;

    if (number == 1) {
        console.log(a);
        
    } else {
        console.log(a);
        console.log(b);
    }

    for (var i = 2; i<=number; i++){
        c = a + b;
        a = b;
        b = c;
        console.log(c);

    }
}

 