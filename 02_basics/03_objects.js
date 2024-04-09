//singleton
// Object.create

//object literals

const mysym =Symbol("key1")

const JsUser={
    name:"hitesh",
    age:18,
    "full name":"peeyush gupta",
    location:"jaipur",
    email:"hirea@google.com",
    isloggedin:false,
    [mysym] : "mykey1",

    lastlogindays:["monday","Saturday"]

   }

    console.log(JsUser.email);

    console.log(JsUser["email"]); 
       console.log(JsUser["full name"]);
       console.log(JsUser[mysym]);

JsUser.email="peeyushgupta27o0@h=gamil.cin"
Object.freeze(JsUser )
JsUser.email="peeyushgujfwkf.kjfwhin"
console.log(JsUser)


JsUser.greeting=function(){
    console.log("hello js user");
}



console.log(JsUser.greeting());
//singleton
// Object.create

//object literals

const mysym =Symbol("key1")

const JsUser={
    name:"hitesh",
    age:18,
    "full name":"peeyush gupta",
    location:"jaipur",
    email:"hirea@google.com",
    isloggedin:false,
    [mysym] : "mykey1",

    lastlogindays:["monday","Saturday"]

   }

    console.log(JsUser.email);

    console.log(JsUser["email"]); 
       console.log(JsUser["full name"]);
       console.log(JsUser[mysym]);

JsUser.email="peeyushgupta27o0@h=gamil.cin"
Object.freeze(JsUser )
JsUser.email="peeyushgujfwkf.kjfwhin"
console.log(JsUser)


JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}



console.log(JsUser.greeting());
console.log(JsUser.greeting  );








