function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Please enter a valid name';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (phoneInput.value.trim() === '' || !phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = 'Please enter a valid phone number (e.g., 123-456-7890)';
        return false;
    } else {
        phoneError.textContent = '';
        return true;
    }
}

function validateAddress() {
    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('addressError');

    if (addressInput.value.trim() === '') {
        addressError.textContent = 'Please enter your address';
        return false;
    } else {
        addressError.textContent = '';
        return true;
    }
}

function validateResume() {
    const resumeInput = document.getElementById('resume');
    const resumeError = document.getElementById('resumeError');

    const allowedExtensions = /(\.pdf)$/i;
    const maxFileSizeMB = 5;
    if (!allowedExtensions.exec(resumeInput.value) || resumeInput.files[0].size > maxFileSizeMB * 1024 * 1024) {
        resumeError.textContent = 'Please upload a PDF file (max size: ' + maxFileSizeMB + 'MB)';
        return false;
    } else {
        resumeError.textContent = '';
        return true;
    }
}

function enableSubmitButton() {
    const submitBtn = document.getElementById('submitBtn');
    const isValid = validateName() && validateEmail() && validatePhoneNumber() && validateAddress() && validateResume();

    if (isValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
document.getElementById('name').addEventListener('blur', enableSubmitButton);
document.getElementById('email').addEventListener('blur', enableSubmitButton);
document.getElementById('phone').addEventListener('blur', enableSubmitButton);
document.getElementById('address').addEventListener('blur', enableSubmitButton);
document.getElementById('resume').addEventListener('change', enableSubmitButton);