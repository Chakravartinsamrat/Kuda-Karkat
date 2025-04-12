var Size= 5;
var growing =true;
var ids = document.getElementById("demo");

function animateText(){
    if(growing){
        Size+=5;
        ids.innerHTML="Enlarging TEXT";
        ids.setAttribute("style", "font-size:"+Size+"px; color:red");
        if(Size>=50){
            growing=false;
        }
    }else{
        Size-=5;
        ids.innerHTML = "SHRINKING TEXT";
        ids.setAttribute("style", "font-size:" + Size + "px; color:blue");
        if(Size<=5){
            growing=true;
        }
    }
}
var intervalId = setInterval(animateText, 500); 