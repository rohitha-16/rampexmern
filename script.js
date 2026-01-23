 /*i = 60;
let grade =(i >= 90) ? 'A' :(i >= 80) ? 'B' :(i >= 70) ? 'C' :(i >= 60) ? 'D' : 'F'; 
console.log(grade); */
//functions

/*function add(){
    console.log(10+20);
}
add();*/
//arrow functions
var add = ()=>{
    console.log(10+20);
}
//spread operator
var arr1=[10,20,40];
var arr2=[30,50,60];
var arr3=[...arr1,...arr2];
console.log(arr3);
//destructuring operator
var[a,b,c,d]=[10,20,30,40];
console.log(a,b,c,d);
var{name,age}={
    name:"arjun",
    age:25,

}
console.log(name,age);