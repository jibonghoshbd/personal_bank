const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

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

// handel deposti btn 
depositBtn.addEventListener('click', function () {
    /* 
     //  input deposit value 
     const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText)
     */
    const depositAmount = getInputValue('deposit-input')

    /* 
     //update total deposit  
     const depositTotal = document.getElementById('deposit-total');
     const depositTotaltext = depositTotal.innerText;
     const depositTotalAmount = parseFloat(depositTotaltext)
     depositTotal.innerText = depositAmount + depositTotalAmount;
  */
    updateTotalField('deposit-total', depositAmount)

    // update blance total  
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText)
    blanceTotal.innerText = previousBlanceTotal + depositAmount;

});

// handel withdraw btn 
withdrawBtn.addEventListener('click', function () {
    /* // withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
 */
    const withdrawAmount = getInputValue('withdraw-input');

    /* // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
 */
    updateTotalField('withdraw-total', withdrawAmount)

    // update blance total 
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText)
    blanceTotal.innerText = previousBlanceTotal - withdrawAmount;

});