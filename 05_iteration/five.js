const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item){
//    console.log(item);
// }  )


// coding.forEach((item)=>{
//     console.log(item);
// })



// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

const mycoding=[
    {
        languageName:"jaba",
        langauageFileName:"jaba"
    },
    {
        languageName:"jaba",
        langauageFileName:"jaba"
    },
    {
        languageName:"pythoin",
        langauageFileName:"jaba"
    },
    {
        languageName:"cpp",
        langauageFileName:"jaba"
    } ,{
        languageName:"kokp",
        langauageFileName:"jaba"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
})