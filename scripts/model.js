function evaluateWithoutEval(myInput)
{ 
    var myOutput= new Function('return '+myInput+';');
    
    return myOutput();
}