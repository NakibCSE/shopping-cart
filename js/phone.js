function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumnberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumnberString);

    let newPhoneNumber;
   if(isIncrease){
    newPhoneNumber = previousPhoneNumber + 1;
   }
    else
    {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneToalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneToalPrice(newPhoneNumber);
    calculateSubTotal()

    
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
   const newPhoneNumber = updatePhoneNumber(false);
   updatePhoneToalPrice(newPhoneNumber);
   calculateSubTotal()

})