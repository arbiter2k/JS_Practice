var body=document.querySelector("body");
var click= document.querySelector("#click");
click.addEventListener("click",function(){
    body.classList.toggle("clicked");
});