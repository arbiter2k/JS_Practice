var answer=prompt("Are you human?","Yes or No");
if(answer==="yes" || answer==="Yes"){
    document.write("Fine you can enter.");
}
else{
    document.writeln("Yes you definitely are not");
}
//window.alert("This is an alert. Call 911. Haha XD");
if(confirm("Wanna play a game?")){
    if (confirm("You are walking into uncharted waters")) {
         document.write("Congratulations you have drowned.<br>");
         document.write("P.S. You can\'t walk on water.<br>");
     }
    else {
         document.write("Huh, Smart Guy.<br> You have survived for now.<br>");
    }
}

