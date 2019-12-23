function timeTest(){
    for(var i=1;i<10;i++)
       document.write(i+'\n');   
}
console.time();
timeTest();
console.timeEnd();
