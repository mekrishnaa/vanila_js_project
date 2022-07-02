let inputfield = document.querySelector('#txtVal');
let symbol = ['+','-','*','/','.'];
function display(symbl){
    let smbl;
    symbol.some(s=>{
        if(inputfield.value.includes(s)){
            smbl = s;
            // return;
        }
    })
    if(!symbol.includes(symbl) && (symbl.charCodeAt(0)<48 || symbl.charCodeAt(0)>57)){
        alert("Please Enter a valid Input");
        return;
    }
    if(smbl){
        let nums =inputfield.value.split(smbl);
        let num2 = nums[nums.length-1]
        if(num2?.length > 8){
            alert("number dosen't exceed more than 9 digits");
            return;
        } 
        else{
            inputfield.value+=symbl;
        }
    }
    else{    
        if(inputfield.value.length>8 && !symbol.includes(symbl)){
            alert("number dosen't exceed more than 9 digits");
            return;
        }else
        inputfield.value+=symbl;
    }
}
function clr(){
    inputfield.value = '';
}

function del() {
    let len = inputfield.value.length;
    if(len > 0){
        
        let nextNum = inputfield.value.split("").slice(0,len-1).join("");
        inputfield.value = nextNum;
    }
}

function calculate(){
    let x = inputfield.value;
    try {
        let y = eval(x);
        console.log("y is ",y);
        inputfield.value='';
        inputfield.value+=y;
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("inputed Value is not a valid expression");
        }
    }
   
}