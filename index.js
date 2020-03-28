var checkbox= document.getElementsByTagName("input");
var reset= document.getElementById("reset");
var lis=document.getElementsByTagName("li");
function strikethrough(arg){
    if(arg.checked===true)
            arg.parentNode.classList.add("clicked");  
    else
            arg.parentNode.classList.remove("clicked");
}
for(var i=0; i<lis.length ; i++){
    checkbox[i].addEventListener("click",function(){
        strikethrough(this)
    });
}
reset.addEventListener("mouseover",function(){
    this.classList.add("hover");
});
reset.addEventListener("mouseout",function(){
    this.classList.remove("hover");
});
reset.addEventListener("click",function(){
    for(i=0; i<checkbox.length; i++){
         checkbox[i].parentNode.classList.remove("clicked");
         checkbox[i].checked=false;
    }
}); 