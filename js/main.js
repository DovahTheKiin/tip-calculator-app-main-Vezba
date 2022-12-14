const tipAmountOutput = document.querySelector(".tip-amount-number")
const totalAmountOutput = document.querySelector(".total-amount-number")
const tipButton = document.querySelectorAll(".tip-button")
const tipButtons = document.querySelectorAll(".tip-buttons > button")
const tipButtonsDiv = document.querySelector(".tip-buttons")
const inputBill = document.querySelector(".input-bill")
const inputPeople = document.querySelector(".people-input")
const resetButton = document.querySelector(".reset-btn")
const customInput = document.querySelector(".custom-input")
const zeroError = document.querySelector(".zero-error")

let tipAmountNumber = 0.00;
let totalAmountNumber = 0.00;
tipAmountOutput.innerHTML = tipAmountNumber.toFixed(2);
totalAmountOutput.innerHTML = totalAmountNumber.toFixed(2);

function hoverOver() {
  resetButton.classList.add('hover');
}
function hoverOut() {
  resetButton.classList.remove('hover');
}
function activeState() {
  resetButton.classList.add("active-button");
  resetButton.addEventListener('mouseover', hoverOver);
  resetButton.addEventListener('mouseout', hoverOut);
    if(inputBill.value == 0) {
      resetButton.classList.remove("active-button");
      resetButton.removeEventListener('mouseover', hoverOver);
      resetButton.removeEventListener('mouseover', hoverOut);
    }
}
function activeState2() {
  resetButton.classList.add("active-button");
  resetButton.addEventListener('mouseover', hoverOver);
  resetButton.addEventListener('mouseout', hoverOut);
    if(inputPeople.value == 0) {
      resetButton.classList.remove("active-button");
      resetButton.removeEventListener('mouseover', hoverOver);
      resetButton.removeEventListener('mouseover', hoverOut);
    }
}

customInput.addEventListener('input', function(){
  resetButton.classList.add("active-button");
  resetButton.addEventListener('mouseover', hoverOver);
  resetButton.addEventListener('mouseout', hoverOut);
    if(customInput.value == 0) {
      resetButton.classList.remove("active-button");
      resetButton.removeEventListener('mouseover', hoverOver);
      resetButton.removeEventListener('mouseover', hoverOut);
    }
})

const clickHandler = (ev) => {
    let inputBillValue = inputBill.value;
    let inputPeopleValue = inputPeople.value;
    console.log(inputBillValue);
    console.log(inputPeopleValue);

    for (const btn of tipButtons) {
      if (btn === ev.target && !btn.classList.contains("active-button")) {
        btn.classList.add("active-button");
        resetButton.classList.add("active-button");
        if(resetButton.classList.contains("active-button")) {
            resetButton.addEventListener('mouseover', hoverOver);
            resetButton.addEventListener('mouseout', hoverOut);
        } 
        // else if(!resetButton.classList.contains("active-button")){
        //   resetButton.removeEventListener('mouseover', function(){
        //         resetButton.classList.add('hover');
        //   });
        //   resetButton.removeEventListener('mouseout', function(){
        //     resetButton.classList.remove('hover');
        // });
        // }
        if ((inputBillValue<=0) || (inputPeopleValue<=0)) {
            totalAmountNumber = 0.00;
            tipAmountNumber = 0.00;
        } else if(inputBillValue>0 && inputPeopleValue>0) {
            let btnValue = Number(btn.innerHTML.match(/\d+/g));
            console.log(btnValue);
            let tipAmount = (inputBillValue*(btnValue/100))/inputPeopleValue;
            console.log(tipAmount);
            let perPerson = inputBillValue/inputPeopleValue + tipAmount;
            console.log(perPerson);

            totalAmountNumber = perPerson;
            tipAmountNumber = tipAmount;
            tipAmountOutput.innerHTML = tipAmountNumber.toFixed(2);
            totalAmountOutput.innerHTML = totalAmountNumber.toFixed(2);
        }
      } else {
        btn.classList.remove("active-button");
      }
      if(inputPeopleValue == 0){
        console.log("yay");
        inputPeople.style.boxShadow = "0 0 0 2px rgba(255, 68, 0, 0.664)";
        zeroError.classList.add('active');
      } else {
        inputPeople.style.boxShadow = "none";
        zeroError.classList.remove('active');
      }
    }
}
console.log(tipAmountNumber);
console.log(totalAmountNumber);



tipButtonsDiv.addEventListener("click", clickHandler);

customInput.addEventListener("keypress", function(e){
  if (e.key === "Enter") {
    let customNumber = customInput.value;
    let inputBillNumber = inputBill.value;
    let inputPeopleNumber = inputPeople.value;
    console.log(customNumber);
    if ((inputBillNumber<=0) || (inputPeopleNumber<=0) || (customNumber<=0)) {
      totalAmountNumber = 0.00;
      tipAmountNumber = 0.00;
  } else if(100 >= customNumber > 0 && inputBillNumber>0 && inputPeopleNumber>0) {
      let tipNumber = (inputBillNumber*(customNumber/100))/inputPeopleNumber;
      let perPersonNumber = inputBillNumber/inputPeopleNumber + tipNumber;
      
      totalAmountValue = perPersonNumber;
      tipAmountValue = tipNumber;
      tipAmountOutput.innerHTML = tipAmountValue.toFixed(2);
      totalAmountOutput.innerHTML = totalAmountValue.toFixed(2);
      resetButton.classList.add("active-button");
    } else {
      console.log("error");
    }
  }
})

// if(resetButton.classList.contains("active-button"))
resetButton.addEventListener('click', function() {
  tipAmountNumber = 0.00;
  totalAmountNumber = 0.00;
  tipAmountOutput.innerHTML = tipAmountNumber.toFixed(2);
  totalAmountOutput.innerHTML = totalAmountNumber.toFixed(2);

  inputBill.value = null;
  inputPeople.value = null;
  customInput.value = null;

  resetButton.classList.remove("active-button");

  inputPeople.style.boxShadow = "none";
  zeroError.classList.remove('active');

  resetButton.removeEventListener('mouseover', hoverOver);
  resetButton.removeEventListener('mouseover', hoverOut);

  for(let i=0;i<tipButton.length;i++){
    if(tipButton[i].classList.contains("active-button")){
      tipButton[i].classList.remove("active-button");
    }
  }
})