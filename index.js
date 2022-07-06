
import  readline from "readline-sync";
import _ from "lodash"
let name = ""
const game = () => {
    console.log(`Welcome to the BrAin-GaMe!`)                
    name = readline.question('May I have your name? ');
    console.log(`Hello, ${name}!`)

}

const first_game = game();
first_game
console.log('What is the result of the expression?') 
let count =0;
while (count <5){  
    const math =  _.random(1,5);
    let a = _.random(1,1000);
    let b = _.random(1,999);
    
    let operation =""
    let correct = 0
    if(math===1){
        operation+="+";
        correct += a+b;
    } else if (math===2){
        operation+="-";
        correct += a-b;
    } else if (math===3){
        operation+="*";
        a =_.random(1,99)
        b =_.random(2,9)
        correct += a*b;
    }else if (math===4){
        operation+=":";
        a =_.random(1,99)
        b = _.random(2,9)
        while(a%b!==0){
            a = _.random(1,999)
        }
        correct += a/b;
    } else if (math===5){
        operation+="^";
        a = _.random(2,9)
        b = _.random(2,4)
        correct += Math.pow(a,b);
    }                                                                                                                                           
console.log(`Question: ${a} ${operation} ${b}`)

let answer = readline.question(`Your answer : `);
let res = ""
if (Number(answer) === correct){
    res+="Correct!";
    count++;

} else if (Number(answer) ===0 ){
    count =5;
}
else{
    res+=`Not correct! \nCorrect answer : ${correct}`;
    count=0;
};
console.log(`${res}`)
if (count === 5){
    console.log(`Good bye ${name}!`);
 };
};