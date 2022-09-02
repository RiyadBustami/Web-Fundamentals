let displayContent=document.querySelector('#display');
let op='',opFlag=false;
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
    op='';
    firstElement='';
}
function setOP(operation){
    if(!opFlag){
        firstElement=parseFloat(displayContent.innerText);
        displayContent.innerText=0;
        console.log(operation);
        op=operation;
        opFlag=true;
    }
    else if(opFlag&&op!=''){//if an operation changed after choosing the first one no need to clear screan
        op=operation;
    }
}
function calculate(){
    let secondElement=parseFloat(displayContent.innerText);
    if(op=='+')displayContent.innerText=firstElement+secondElement;
    if(op=='-')displayContent.innerText=firstElement-secondElement;
    if(op=='*')displayContent.innerText=firstElement*secondElement;
    if(op=='/')displayContent.innerText=firstElement/secondElement;
    firstElement=0;
    secondElement=0;
    op='';
    opFlag=false;
}
