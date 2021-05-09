//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

// Using `console.log` log all the evan values from 1 to 10.

// Using `console.log` log all the odd values from 1 to 10.

// Calculate the sum of all numbers from 1 to 10.

// Log all the values from 1 to 10 using while loop

for(let value =1; value<=10;value++){
    console.log(value);
}


for(let value =1; value<=10;value++){
    
    if(value % 2 == 0){
        console.log(value);
    }

}
for(let value =1; value<=10; value++){
    if(value % 2 !==0){
        console.log(value);
    }
}
let sum =0;
for (let value =1; value<=10; value++){
    
    sum +=(value);
        console.log(sum);
    }
//while
let value=1;
while(value<10){
    console.log(value);
    value=value+1;
}

