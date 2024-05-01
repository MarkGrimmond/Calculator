"use strict"

//inputs
const loanInput = document.getElementById("loanInput");
const interestInput = document.getElementById("interestInput");
const yearsInput = document.getElementById("yearsInput")
//buttons
const convertBtn = document.getElementById("convertBtn");

//output 
const monthlyInput = document.getElementById("monthlyInput");

window.onload = init;

function init (){
    convertBtn.onclick = onconvertBtnClicked;

}

function onconvertBtnClicked(){

    //values i know
    let loan = Number("loanInput.value");
    let interest = Number("interestInput");
    let years = Number("yearsInput")
    
    //compute the values i dont know
    let monthly =()


}