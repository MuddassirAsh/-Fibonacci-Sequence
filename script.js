function fibonacci(){
  
    /* this statement defines an object reference to the 
       html element having an ID "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");    
  
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
   
   
    /* this statement add some message to our output Object */
    outputObj.innerHTML = "number: " + a + "<br><br>"+ "Fabonacci: ";

    var n1 = 0;  
    var n2 = 1;  
    var nextTerm=0;
    for (var i = 1; i <=a; i++) 
    {
    outputObj.innerHTML = outputObj.innerHTML+nextTerm+ ",";
    nextTerm = n1 + n2;
    n1=n2;
    n2=nextTerm;
    }

    
    
    
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }