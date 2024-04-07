//DAtes

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//let myCreatedDate =new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3);
//let myCreatedDate=new Date("2023-01-13");
let myCreatedDate=new Date("01-13-2023");

//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());



let mytimestamp =Date.now();//miliseocnd
console.log(mytimestamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));//in second

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


// `${newDate.getDay()}and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'ceil '
})