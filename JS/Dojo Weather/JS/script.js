function hideFooter(){
    document.querySelector("footer").remove();
}
function celToFeh(num){
    return Math.round(num*9/5+32);

}
function fehToCel(num){
    return Math.round((num-32)*5/9);
}
function toggleTemp(element){
    if(element[0].selected){
        let highestDegrees=document.getElementsByClassName('highest-degree');

        let lowestDegrees=document.getElementsByClassName('lowest-degree');
        
        for(let i=0;i<lowestDegrees.length;i++){

            let hiDeg=parseInt(highestDegrees[i].innerHTML);
            let loDeg=parseInt(lowestDegrees[i].innerHTML);

            highestDegrees[i].innerHTML=fehToCel(hiDeg)+'°';
            lowestDegrees[i].innerHTML=fehToCel(loDeg)+'°';
        }
    }
    else if(element[1].selected){
        let highestDegrees=document.getElementsByClassName('highest-degree');
        let lowestDegrees=document.getElementsByClassName('lowest-degree');
        for(let i=0;i<lowestDegrees.length;i++){

            let hiDeg=parseInt(highestDegrees[i].innerHTML);
            let loDeg=parseInt(lowestDegrees[i].innerHTML);

            highestDegrees[i].innerHTML=celToFeh(hiDeg)+'°';
            lowestDegrees[i].innerHTML=celToFeh(loDeg)+'°';
        }

    }
}