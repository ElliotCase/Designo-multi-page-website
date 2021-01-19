const textareas = document.querySelectorAll('textarea');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#contact-form');



if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputs.forEach(input => {
            if (input.value == '' || input.value == null) {
                input.nextElementSibling.classList.add('active');
            } else {
                input.nextElementSibling.classList.remove('active');
            }
        })
        textareas.forEach(textarea => {
            if (textarea.value == '' || textarea.value == null) {
                textarea.nextElementSibling.classList.add('active');
            } else {
                textarea.nextElementSibling.classList.remove('active');
            }
        })
    })
}