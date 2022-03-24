const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

// handel deposti btn 
depositBtn.addEventListener('click', function () {
    // deposit input value 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText)
    // console.log(depositAmount)

    //update total deposit  
    const depositTotal = document.getElementById('deposit-total');
    const depositTotaltext = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotaltext)
    depositTotal.innerText = depositAmount + depositTotalAmount;

    // update blance total  
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText)
    blanceTotal.innerText = previousBlanceTotal + depositAmount;

    // clear deposit input value  
    depositInput.value = '';

})

// handel withdraw btn 
withdrawBtn.addEventListener('click', function () {
    // withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

    // update blance total 
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText)
    blanceTotal.innerText = previousBlanceTotal - withdrawAmount;

    // clear withdraw input 
    withdrawInput.value = '';
})