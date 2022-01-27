function createButtons(text,type)
{
    var button=document.createElement('button');
    
    button.innerHTML=text;
    button.className=type;
    
    document.querySelector('#'+type).appendChild(button);
}

function emptyDivForEndline(type)
{
    var emptyDiv=document.createElement('div');
    
    document.querySelector('#'+type).appendChild(emptyDiv);
}

// function style() {
//     document
// }