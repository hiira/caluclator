'use strict'

const equall = document.getElementById('equall');
const equal2 = document.getElementById('equal2');
const equal3 = document.getElementById('equal3');
const equal4 = document.getElementById('equal4');

const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');

equall.addEventListener('click', ()=>{
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    value1 = Number(value1);
    value2 = Number(value2);
    var formula1 = value1 + value2;
    result1.textContent = formula1;
});

equal2.addEventListener('click', ()=>{
    var value3 = document.getElementById('value3').value;
    var value4 = document.getElementById('value4').value;
    value3 = Number(value3);
    value4 = Number(value4);
    var formula2 = value3 - value4;
    result2.textContent = formula2;
});

equal3.addEventListener('click', ()=>{
    var value5 = document.getElementById('value5').value;
    var value6 = document.getElementById('value6').value;
    value5 = Number(value5);
    value6 = Number(value6);
    var formula3 = value5 * value6;
    result3.textContent = formula3;
});

equal4.addEventListener('click', ()=>{
    var value7 = document.getElementById('value7').value;
    var value8 = document.getElementById('value8').value;
    value7 = Number(value7);
    value8 = Number(value8);
    var formula4 = value7 / value8
    result4.textContent = formula4;
});
