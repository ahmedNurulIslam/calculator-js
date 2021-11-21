document.getElementById('button').addEventListener('click' ,function (event) {
const btnValue = event.target.innerText;
const inputValue = document.getElementById('mainInput').value;


if (btnValue == 'C'){
    document.getElementById('mainInput').value = '';
} 
else if (btnValue == '<'){
    document.getElementById('mainInput').value = inputValue.slice(0,inputValue.length-1 );
} 
else if (btnValue == '='){
    document.getElementById('secondaryInput').value = inputValue;
    document.getElementById('mainInput').value = eval(inputValue);
} 
else{
    document.getElementById('mainInput').value = inputValue + btnValue;
}
})