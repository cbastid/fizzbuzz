for (i=1; i<=100; i++){
    let resultado = '';
    if(i % 3 == 0){
        resultado += "fizz";
        console.log("Fizz");
    }
    if(i % 5 == 0){
        resultado += "Buzz";
    }
    console.log(resultado || i);
}