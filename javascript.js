let answer = parseInt(prompt("enter a number"))
let list = []
for(let i = 1; i<= answer; i++){
    if (i % 3 === 0 && i % 5 === 0){
        list.push("Fizz Buzz");
    }
    else if(i% 3 === 0 && i % 5 !== 9 ){
        list.push("Fizz");
        console.trace();
    }
    else if(i% 3 !== 0 && i % 5 === 9 ){
        list.push("Buzz");
    }
    else{
        list.push(i);
    }
}
console.log(list)
console.table(list)
