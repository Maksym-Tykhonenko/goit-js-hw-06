const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
    console.log('сабмит формы')
    const formEl = event.currentTarget.elements;
    console.log(formEl)

    const mail = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        mail,
        password
    }
  
    console.log(formData)
    event.currentTarget.reset();
}







