let inputEl = document.getElementById('petInput');
let pattern = /^pet_20\d{2}\w+/; 

function validateSyntax() {

    console.log(inputEl.value);
    let result = '';
    result = checkInput();    
    document.getElementById('result').innerText = result;
}




function checkInput(){
    let output = "";

    console.log(typeof(inputEl.value));

    if(typeof(inputEl.value) == "string"){
       if(pattern.test(inputEl.value)){
            output = "Valid Syntax" + " 🟢";
        }
        else{
            output = "Invalid Syntax" + " 🔴";
        }
    }else{
        output = "Invalid Syntax" + " 🔴";
    }

    console.log(output);
    return output; 
}
