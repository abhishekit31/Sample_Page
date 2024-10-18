function validateForm() 
{
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const form = document.getElementById("form");

    let isValid = true;

    if (fname === "") {
        document.getElementById("fname-error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("fname-error").style.visibility = "hidden";
    }

    if (lname === "") {
        document.getElementById("lname-error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("lname-error").style.visibility = "hidden";
    }

    if (phone === "") {
        document.getElementById("phone-error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("phone-error").style.visibility = "hidden";
    }

    if (email === "") {
        document.getElementById("email-error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("email-error").style.visibility = "hidden";
    }

    if (isValid) {
        form.reset(); 
    }
    return isValid;
}
