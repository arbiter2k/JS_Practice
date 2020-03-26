var body=document.querySelector("body");
var click= document.querySelector("#click");
click.addEventListener("click",function(){
    body.classList.toggle("clicked");
});
click.addEventListener("mouseover",function(){
    click.classList.add("hover");
});
click.addEventListener("mouseleave",function(){
    click.classList.remove("hover");
});