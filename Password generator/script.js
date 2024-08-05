const passwordBox = document.getElementById('Password');

const CopidPara = document.getElementById('copid-para');

const Mylenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const symbol = "!@#$%^&()[]{}><?/*_-=\|~+.";

const allChars = upperCase + lowerCase + Numbers + symbol;

function Createpassword(){
    let Passowrd = "";

    Passowrd+= upperCase[Math.floor(Math.random() * upperCase.length)];

    Passowrd+= lowerCase[Math.floor(Math.random() * lowerCase.length)];

    Passowrd+= Numbers[Math.floor(Math.random() * Numbers.length)];

    Passowrd+= symbol[Math.floor(Math.random() * symbol.length)];
    // console.log(Passowrd.length)

    while (Mylenght  > Passowrd.length) {
        Passowrd+= allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = Passowrd;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    CopidPara.innerHTML = "Passowrd copid succesfully";
}
