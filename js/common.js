

function getTextElementValueByID(elementID){
    
    const phoneTotalElement = document.getElementById(elementID);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
  
}
function setTaxtElementValueById(elementID, value){
    const subTotalElement = document.getElementById(elementID);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currnetPhoneTotal = getTextElementValueByID('phone-total');
    const currentCaseTotal = getTextElementValueByID('case-total');

    const currentSubTotal = currentCaseTotal + currnetPhoneTotal;
    setTaxtElementValueById('sub-total',currentSubTotal);
    
    // calculate tax
    const taxAmountString = (currentSubTotal*0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTaxtElementValueById('tax-amount',taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTaxtElementValueById('final-total',finalAmount);
}