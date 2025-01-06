function generatePassword(length) {

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';


    const allChars = lowerCase + upperCase + numbers + specialChars;


    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

const randomPassword=generatePassword(12);
console.log( `Random password: ${randomPassword}`);
document.getElementById("password-display").innerText = randomPassword;