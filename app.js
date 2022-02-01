const textBox = document.querySelector('.text-box');
let answer = document.querySelector('.answer');
const convert = document.getElementById('convert');


convert.addEventListener('click', function(){
    let binary = `${textBox.value}`;
    let decimal = (parseInt(binary, 2));
    answer.value =  decimal;
})