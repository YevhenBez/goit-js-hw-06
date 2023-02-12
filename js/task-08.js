const form = document.querySelector('.login-form');

const message = "Всі поля повинні бути заповнені!";

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget

    const mailAndPassword = { email: email.value, password: password.value };
    
    if (mailAndPassword.email === "" || mailAndPassword.password === "") {
        alert(message);
        return;
    };

    console.log(mailAndPassword);

    event.currentTarget.reset();
}
