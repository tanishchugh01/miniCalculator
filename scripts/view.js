function createButtons(text)
{
    var button=document.createElement('button');
    
    button.innerText=text;
    button.className='value';
    
    document.querySelector('#buttons').appendChild(button);
}

function emptyDivForEndline()
{
    var emptyDiv=document.createElement('div');
    
    document.querySelector('#buttons').appendChild(emptyDiv);
}