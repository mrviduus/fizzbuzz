/*Simple solution */
let simpleSolution = function(n){
    for(let i = 1; i < n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("Fizz");
        }else if(i % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
//simpleSolution(100);


/*Solution with Flags */
let flagSolution = class Flag{
    constructor(n){
        this.n = n;
    }
    isFizz(n){
        if(n % 3 === 0){
            return true;
        }
        return false;       
    }
    isBuzz(n){
        if(n % 5 === 0){
            return true;
        }
        return false;
    }
    isFizzBuzz(n){
        if(n % 3 === 0 && n % 5 === 0){
            return true;
        }
        return false;
    }

    run(){
        for(let i = 0; i < this.n; i++){
            switch(true){
                case this.isFizzBuzz(i):
                    console.log("FizzBuzz");
                    break;
                case this.isFizz(i):
                    console.log("Fizz");
                    break;
                case this.isBuzz(i):
                    console.log("Buzz");
                    break;
                default:
                    console.log(i);
            }

        }
    }
}

//let testFlag = new flagSolution(100);
//testFlag.run();
//console.log(testFlag.isFizz(3));
//console.log(testFlag.isBuzz(5));
//console.log(testFlag.isFizzBuzz(15));

/*function style */

function funcStyle(){
    const gen = (n, w) => (num) => num % n === 0 ? w : '';
    const fizz = gen(3, 'Fizz');
    const buzz = gen(5, 'Buzz');


    [...Array(99).keys()].map(i => i + 1).forEach(i => console.log(fizz(i) + buzz(i) || i));

}

//funcStyle();



