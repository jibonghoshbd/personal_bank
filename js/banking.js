const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const errorMessage = document.getElementById('error-message');

function getInputValue(inputId) {
    //  input value 
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amount = parseFloat(inputAmountText)
    // clear deposit input value  
    inputField.value = '';
    return amount;
}

function updateTotalField(fieldId, amount) {
    const totalElement = document.getElementById(fieldId);
    const totaltext = totalElement.innerText;
    const totalAmount = parseFloat(totaltext)
    totalElement.innerText = amount + totalAmount;
}

function getCurrentBlance() {
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText)
    return previousBlanceTotal;
}

function updateBlance(amount, isAdd) {
    const blanceTotal = document.getElementById('blance-total');
    /* 
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText)
     */
    const previousBlanceTotal = getCurrentBlance();
    if (isAdd === true) {
        blanceTotal.innerText = previousBlanceTotal + amount;
    } else {
        blanceTotal.innerText = previousBlanceTotal - amount;
    }
}

// handel deposti btn 
depositBtn.addEventListener('click', function () {
    /* 
     //  input deposit value 
     const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText)
     */


    /* 
     //update total deposit  
     const depositTotal = document.getElementById('deposit-total');
     const depositTotaltext = depositTotal.innerText;
     const depositTotalAmount = parseFloat(depositTotaltext)
     depositTotal.innerText = depositAmount + depositTotalAmount;
  */


    /* 
     // update blance total  
     const blanceTotal = document.getElementById('blance-total');
     const blanceTotalText = blanceTotal.innerText;
     const previousBlanceTotal = parseFloat(blanceTotalText)
     blanceTotal.innerText = previousBlanceTotal + depositAmount;
  */
    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount)
        updateBlance(depositAmount, true)
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }

});

// handel withdraw btn 
withdrawBtn.addEventListener('click', function () {
    /* // withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
 */


    /* // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
 */


    /* 
    // update blance total 
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText)
    blanceTotal.innerText = previousBlanceTotal - withdrawAmount; 
    */
    const withdrawAmount = getInputValue('withdraw-input');
    const blanceTotal = getCurrentBlance()
    if (withdrawAmount > 0 && withdrawAmount < blanceTotal) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBlance(withdrawAmount, false)
        errorMessage.style.display = 'none';
    }
    else if (withdrawAmount > blanceTotal) {
        alert('You can not withdraw more then you have in your blance')
        errorMessage.style.display = 'none';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = "block";
    }
});