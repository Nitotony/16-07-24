



// question 1
let arr = [1, 2, 3, 4, 5];//creation & initialization   


// question 2
arr.push(6);//array maipulation
console.log(arr.shift());
console.log(arr.unshift(10));

console.log(arr.pop());

console.log(arr);//array manipulation


//question 4
let result=arr.filter(i=>{  //array filter
    if(i%2==0){
        console.log(i);
    }
})// array filter


// question 5
let newr=arr.map(item=>(item*2));//map

console.log(newr);//map





//question 3
console.log(arr.indexOf(2));// array searching

let findarr=arr.find(i=>{
    if(i%2!=0){
        console.log(i);
    }

});//array searching



//question 6

let bam=[12,34,5,3,4,1000,2000,30000,45];// array sorting




console.log(bam.sort());


console.log(bam.reverse());// array sorting
