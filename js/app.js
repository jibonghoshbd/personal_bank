const logInBtn = document.getElementById('login-btn');

const getInput = function (value) {
    // debugger;
    const input = document.getElementById(`${value}-input`);
    const inputValue = input.value;
    // console.log(inputValue)
    input.value = '';
    return inputValue;
};

logInBtn.addEventListener('click', function () {
    const emailFild = getInput("email")
    const paswordfild = getInput("password")

    if (emailFild == 'abc@gmail.com' && paswordfild == 'myBank') {
        window.location.href = '../banking.html';
    }
    else {
        alert('not workig')
        const error = document.getElementById('error');
        error.style.display = "block";
    }
})

