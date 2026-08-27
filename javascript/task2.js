console.log("This is a test");

function isStrongpassword(password) {
    const isLong = password.lenght >= 6 ;

    const isUppercase = /[A-Z]/.test(password);
    const isLowercase = /[a-z]/.test(password);
    const isNumber = /[0-9]/.test(password);

    return isLong && isUppercase && isLowercase && isNumber;
}


let pass = isStrongpassword("Shourya123");

console.log(pass);
