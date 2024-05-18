#Projects related to DOM


## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-l8ybra?file=index.html)

#Solution Code

## project 1
```javascript

console.log("peeyush")
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
  console.log(e)
  console.log(e.target)
  if(e.target.id==='grey'){
    body.style.backgroundcolor=e.target.id;
  }
  else if(e.target.id==='white'){
    body.style.backgroundcolor=e.target.id;
  }
  else if(e.target.id==='blue'){
    body.style.backgroundcolor=e.target.id;
  }
  else if(e.target.id==='yellow'){
    body.style.backgroundcolor=e.target.id;
  }
  });
});