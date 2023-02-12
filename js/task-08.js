const form = document.querySelector('.login-form');

const message = "Всі поля повинні бути заповнені!";

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;

    const passwordKey = event.currentTarget.elements.password.value;

    if (mail === "" || passwordKey === "") {
        alert(message);
    }
    
    const mailAndPassword = {

    };

    mailAndPassword.email = mail;

    mailAndPassword.password = passwordKey;

    console.log(mailAndPassword);
}
