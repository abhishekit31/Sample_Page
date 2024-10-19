function validateForm() 
{
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const form = document.getElementById("form");

    let isValid = true;
    const errorStyle = "color: red; font-weight: bold;"

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "<span style='" + errorStyle + "'>First name is required</span>";
        document.getElementById("fname-error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("fname-error").style.visibility = "hidden";
    }

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "<span style ='" + errorStyle + "'>Last name is required</span>"
        document.getElementById("lname-error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("lname-error").style.visibility = "hidden";
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        document.getElementById("phone-error").innerHTML = "<span style = '"+ errorStyle +"'> Phone number is required </span>"
        document.getElementById("phone-error").style.visibility = "visible";
        isValid = false;
    } else if (!/^\d+$/.test(phone)) {
        // If the input contains non-numeric characters
        document.getElementById("phone-error").innerHTML = "<span style = '"+ errorStyle +"'>Please enter the number only</span>"
        document.getElementById("phone-error").style.visibility = "visible";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        // If the phone number is not exactly 10 digits
        document.getElementById("phone-error").innerHTML = "<span style = '"+ errorStyle +"'>Phone number must be exactly 10 digits</span>"
        document.getElementById("phone-error").style.visibility = "visible";
        isValid = false;
    } else {
        document.getElementById("phone-error").style.visibility = "hidden";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" ){
        document.getElementById("email-error").innerHTML = "<span style = '"+ errorStyle +"'>Email Id is required</span>"
        document.getElementById("email-error").style.visibility = "visible";
        isValid = false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("email-error").innerHTML = "<span style = '"+ errorStyle +"'>Invalid email Id it should contain @ </span>"
        document.getElementById("email-error").style.visibility = "visible";
        isValid = false;
    }
     else {
        document.getElementById("email-error").style.visibility = "hidden";
    }

    if (isValid) {
        form.reset(); 
    }
    return isValid;
}
