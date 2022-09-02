let displayContent=document.querySelector('#display');
let Op='';
let firstElement=0;

function press(num){
    if(displayContent.innerText=='0'){
        displayContent.innerText=num;
    }
    else if(displayContent.innerText.length<10){
        displayContent.innerText=displayContent.innerText+num;
    }
}
function clr(){
    displayContent.innerText=0;
    Op='';
    firstElement='';
}
function setOP(operation){
    if(Op==''){
        firstElement=parseFloat(displayContent.innerText);
        displayContent.innerText=0;
        console.log(operation);
        Op=operation;
    }
}
function calculate(){
    let secondElement=parseFloat(displayContent.innerText);
    if(Op=='+')displayContent.innerText=firstElement+secondElement;
    if(Op=='-')displayContent.innerText=firstElement-secondElement;
    if(Op=='*')displayContent.innerText=firstElement*secondElement;
    if(Op=='/')displayContent.innerText=firstElement/secondElement;
    firstElement=0;
    secondElement=0;
    Op='';
}
