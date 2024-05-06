const coding = ["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
   // console.log(item);
    return item;
} )

//console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10];
//const newNums =myNums.filter((num)=>num>4)//or
// const newNums=myNums.filter((num )=>{
//     return num>4
// })
// console.log(newNums);


// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);



const books=[
    {title:'book one',genre: 'fiction',publish:1981,
        edition: 2},
        {title:'book two',genre: 'non-fiction',publish:1982,
        edition: 2},
        {title:'book three',genre: 'history',publish:1983,
        edition: 2},
        {title:'book four',genre: 'non-fiction',publish:1984,
        edition: 2},
        {title:'book five',genre: 'science',publish:1985,
        edition: 2},
];

let userbooks=books.filter((bk)=>bk.genre==='history')

console.log(userbooks);

userbooks=books.filter((bk)=>{return bk.publish>1995 && bk.genre==="history"})
console.log(userbooks);