

function sayMyName(){
    console.log("p");
    console.log("e");
    console.log("e");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
    
}

//sayMyName();

// function addTwonumbers(number1,number2){
//   console.log(number1+number2);
// }

//function addTwonumbers(number1,number2){
    // let result=number1+number2
    // return result}

//const result =addTwonumbers(3,4)

// console.log("result:",result);


function loginUserName(username ="pe"){
    if(!username){//(username === undefined)also we can use
        console.log("please enter a user name");
        return 
    }
    return `${username} just logged in `
}

console.log(loginUserName("peeyush"));
//  console.log(loginUserName(""));


function calculatecartPrice(val1,val2,...num1){
    return num1
}

console.log(calculatecartPrice(20,400,500,222));

const user={
    username:"hitesh",
    price:100
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username}and price is ${anyobject.price}` );
}

//handleobject(user)
handleobject({
    username:"hitesh",
    price:399
})

const myNewArray =[200,400,533,535]

function returnSecondValue(getArray)
{
    return getArray[1]
}


console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,533,535 ]));

