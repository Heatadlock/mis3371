window.onload = function () {
    document.getElementById("datetime").innerText = new Date().toLocaleString();
};

// Helper function to set error messages
function setError(id, message) {
    document.getElementById(id).innerText = message;
}

// Helper function to clear error messages
function clearError(id) {
    document.getElementById(id).innerText = "";
}

// First Name Validation
function validatefirstName() {
    const value = document.getElementById("firstName").value;
    const pattern = /^[A-Za-z'-]{1,30}$/;
    if (!pattern.test(value)) {
        setError("firstName-error", "Invalid first name.");
        return false;
    }
    clearError("firstName-error");
    return true;
}

// Middle Initial Validation
function validatemiddleInitial() {
    const value = document.getElementById("middleInitial").value;
    const pattern = /^[A-Za-z]?$/;
    if (!pattern.test(value)) {
        setError("middleInitial-error", "Invalid middle initial.");
        return false;
    }
    clearError("middleInitial-error");
    return true;
}

// Last Name Validation
function validatelastName() {
    const value = document.getElementById("lastName").value;
    const pattern = /^[A-Za-z'-]{1,30}$/;
    if (!pattern.test(value)) {
        setError("lastName-error", "Invalid last name.");
        return false;
    }
    clearError("lastName-error");
    return true;
}

// Date of Birth Validation
function validateDob() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
        setError("dob-error", "Please enter your date of birth.");
        return false;
    }
    clearError("dob-error");
    return true;
}

// SSN Validation
function validateSSN() {
    const ssn = document.getElementById("ssn").value;
    const pattern = /^\d{3}-\d{2}-\d{4}$/;
    if (!pattern.test(ssn)) {
        setError("ssn-error", "Format: xxx-xx-xxxx");
        return false;
    }
    clearError("ssn-error");
    return true;
}

// Address Line 1 Validation
function vaildateAddress1() {
    const address1 = document.getElementById("address1").value;
    if (address1.trim().length < 2) {
        setError("address1-error", "Please enter a valid address.");
        return false;
    }
    clearError("address1-error");
    return true;
}

// Zipcode Validation
function validateZipcode() {
    const zip = document.getElementById("zipcode").value;
    const pattern = /^\d{5}(-\d{4})?$/;
    if (!pattern.test(zip)) {
        setError("zipcode-error", "Invalid ZIP code.");
        return false;
    }
    clearError("zipcode-error");
    return true;
}

// Email Validation
function validateEmail() {
    const email = document.getElementById("email").value;
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;
    if (!pattern.test(email)) {
        setError("email-error", "Invalid email address.");
        return false;
    }
    clearError("email-error");
    return true;
}

// Phone Validation
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!pattern.test(phone)) {
        setError("phone-error", "Format: 000-000-0000");
        return false;
    }
    clearError("phone-error");
    return true;
}

// Password Validation
function validatePassword() {
    const password = document.getElementById("password").value;
    if (password.length < 8 || password.length > 20) {
        setError("password-error", "Password must be 8-20 characters.");
        return false;
    }
    clearError("password-error");
    return true;
}

// Confirm Password Validation
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    if (confirm !== password) {
        setError("confirmPassword-error", "Passwords do not match.");
        return false;
    }
    clearError("confirmPassword-error");
    return true;
}
