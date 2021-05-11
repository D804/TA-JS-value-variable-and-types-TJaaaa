//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for(let value =1; value<=10;value++){
    console.log(value);
}

// Using `console.log` log all the evan values from 1 to 10.
for(let value =1; value<=10;value++){
    
    if(value % 2 === 0){
        console.log(value);
    }

}

// Using `console.log` log all the odd values from 1 to 10.

for(let value =1; value<=10; value++){
    if(value % 2 !==0){
        console.log(value);
    }
}

// Calculate the sum of all numbers from 1 to 10.
let sum =0;
for (let value =1; value<=10; value++){
       sum += value;
        console.log(sum);
    }

// Log all the values from 1 to 10 using while loop
let value=1;
while(value<10){
    console.log(value);
    value=value+1;
}








