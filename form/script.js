const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const passConfirm = document.getElementById('confirmpassword');

function checkInputs() {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const numberValue = number.value;
    const passwordValue = password.value;
    const passConfirmValue = passConfirm.value;

    if (firstnameValue === "") {
        setErrorFor(firstname, "O nome é obrigatório.");
    }   else {
        setSuccessFor(firstname)
    }

    if (lastnameValue === "") {
        setErrorFor(lastname, "O sobrenome é obrigatório.");
    }   else {
        setSuccessFor(lastname)
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    }   else {
        setSuccessFor(email)
    }
    
    if (numberValue === "") {
     setErrorFor(number, "O número é obrigatório.");
    }   else {
        setSuccessFor(lastname)
    }
    
    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.lenght < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 characteres.")
    } else {
        setSuccessFor(password);
    }

    if (passConfirmValue === "") {
        setErrorFor(passConfirm, "A confirmação de senha é obrigatória.");
    } else if (passConfirmValue !== passwordValue) {
        setErrorFor(passConfirm, "As senhas não conferem.");
    } else {
        setSuccessFor(passConfirm); 
    }
}
 
