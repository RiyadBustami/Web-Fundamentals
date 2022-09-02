console.log("page loaded...");

function deleteItem(item)
{
    item.remove();
}

function decreaseConnectionReqs(){
    let rqstsNumSpan = document.querySelector("#connections-rqsts-num");
    let rqstsNum= parseInt(rqstsNumSpan.innerHTML);
    rqstsNum--;
    rqstsNumSpan.innerHTML= rqstsNum;
}

function increaseConnections(){
    let conNumSpan = document.querySelector("#connections-num");
    let conNum = parseInt(conNumSpan.innerHTML);
    conNum++;
    conNumSpan.innerHTML = conNum;
}

function accept(element){
    alert(element.parentElement.parentElement.children[0].innerText+' was accepted.');
    deleteItem(element.parentElement.parentElement);
    decreaseConnectionReqs();
    increaseConnections();
}

function deny(element){
    deleteItem(element.parentElement.parentElement);
    decreaseConnectionReqs();
}

function changeName(){
    document.querySelector(".card-body h1").textContent="any other name";
    document.querySelector(".card-body h1").style.color= 'blue';
}

