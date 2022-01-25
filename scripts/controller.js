myMain();

function myMain() {
    createAllButtons();
    buttonProcessing();
}

function createAllButtons() {
    createValueButtons();
    createSymbolsButtons();
}

function createValueButtons() {
    var type = "value";

    for (var ind = 1; ind < 10; ind++) {
        if (ind % 3 == 1) {
            emptyDivForEndline(type);
        }

        createButtons(ind, type);
    }

    emptyDivForEndline(type);
    createButtons(0, type);
}

function createSymbolsButtons() {
    var type = "symbol";

    createButtons("+", type);
    createButtons("-", type);
    createButtons("/", type);
    createButtons("*", type);

    emptyDivForEndline(type);

    createButtons(".", type);
    createButtons("(", type);
    createButtons(")", type);
    // createButtons('&#8592;',type);
}

function buttonProcessing() {
    var buttons = document.querySelectorAll("button");

    for (var ind = 0; ind < buttons.length; ind++) {
        buttons[ind].addEventListener("click", function (event) {
            if (event.target.id === "backspace") {
                var input = document.querySelector("input").value;

                document.querySelector("input").value = input.slice(0, -1);
            } else if (event.target.id === "evaluate") {
                evaluate();
                // evaluateWithoutEval();
            } else {
                document.querySelector("input").value += event.target.innerText;
            }
        });
    }
}

function evaluate() {
    var input = document.querySelector("input").value;
    var outputDiv=document.querySelector("#output");
    var errorDiv=document.querySelector('#error');

    try {
        // var output = eval(input);
        //eval is dangerous
        
        var output=evaluateWithoutEval(input);
        
        outputDiv.innerText = 'Answer: '+output;
        errorDiv.innerText='';
    } catch {
        outputDiv.innerText = '';
        errorDiv.innerText='Unexpected Expression..Please try again..'
    }
}
