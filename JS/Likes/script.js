function like(element){
    let numOfLikesTxt=element.parentElement.children[1].innerHTML;
    element.parentElement.children[1].innerHTML=(parseInt(numOfLikesTxt)+1+' like(s)');
}