let form = document.querySelector('.form__group');
let errorMsg = document.querySelector('.error__msg');
let emailInput = document.getElementById('e-address');
let successCard = document.querySelector('.success__card');
let signUpCard = document.querySelector('.signup__card');
let attribute = document.querySelector('.attribute');
let email = document.getElementById('email');


function validateEmail(email){
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return emailRegex.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    if (validateEmail(emailInput.value)) {
        signUpCard.style.display = 'none';
        email.textContent = emailInput.value;
        successCard.style.display = 'flex';
        attribute.style.display = 'none';
    } else {
        errorMsg.textContent = 'Valid email required';
        emailInput.style.borderColor = 'var(--clr-tomato)';
        emailInput.parentNode.children[0].style.color = 'var(--clr-tomato)';
    }
});

// function dismissMessage() {
//     signUpCard.classList.add('signup__card');
//     attribute.classList.add('attribute');
//     signUpCard.classList.remove('success__message');

// }
let dismissBtn = document.getElementById('dismiss__btn');
dismissBtn.addEventListener("click", ()=> {
    return location.reload()
})