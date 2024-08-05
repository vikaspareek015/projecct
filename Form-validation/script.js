var NameError = document.getElementById("name-error")
var PhoneError = document.getElementById("phone-error")
var EmailError = document.getElementById("email-error")
var MessageError = document.getElementById("message-error")
var SubmitError = document.getElementById("Submit-error")


function ValidateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        NameError.innerHTML = "Name is Reuird";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        NameError.innerHTML = "Write full name";
        return false;
    }
    
    NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return True;
} 

function ValidatePhone(){
    var phone = document.getElementById('contact-number').value;
    if(phone.length == 0){
        PhoneError.innerHTML = "phone number is requird";
        return false;
    }
    if(phone.length !== 10){
        PhoneError.innerHTML = "phone number shold be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML = "Only digits Please";
        return false;
    }
    PhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return True;
}

function ValidateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        EmailError.innerHTML = "email is Reuird";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        EmailError.innerHTML = "Email invalid";
        return false;
    }
    
    EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return True;
} 

function ValidateMessage(){
    var message = document.getElementById('contact-message').value;
    var reuird = 30;
    var left = reuird - message.length;

    if(left > 0){
        MessageError.innerHTML = `${left} more charactor requird`;
        // MessageError.innerHTML = left + " more charactor requird";
        return false
    }

    MessageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return True;
}

function ValidateForm(){
    if(!ValidateName() || !ValidatePhone() || !ValidateEmail() || !ValidateMessage()){
        SubmitError.style.display = "block"
        SubmitError.innerHTML = "Please fix error to submit"
        setTimeout(function(){
            SubmitError.style.display = "none"
        },3000)
        return false
    }
}