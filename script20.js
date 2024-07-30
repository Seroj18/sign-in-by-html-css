const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// -----------------------------------------------------------------------------------

const RegName = document.querySelector(".regName")
const regSurName = document.querySelector(".regSurName")
const regLogin = document.querySelector(".regLogin")
const regPassword = document.querySelector(".regPassword")
const regPasswordAgain = document.querySelector('.regPasswordAgain')

//mesiges

const messige = document.querySelector(".messige")
const LogMessige = document.querySelector(".LogMessige")
const Namemessige = document.querySelector(".Namemessige")
const Surmessige = document.querySelector(".Surmessige")
const Regmessige = document.querySelector(".Regmessige")
const Pasmessige = document.querySelector(".Pasmessige")
const PasAmessige = document.querySelector(".PasAmessige")
const LogInMessige = document.querySelector(".LogInMessige")
const PasMessige = document.querySelector(".PasMessige")

let arr = []

const NameRegex = /^[A-Z|Ա-Ֆ][a-z|ա-ֆ]{2,15}$/;
const LogInRegex =  /^[A-Za-z0-9]{3,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_$-])[a-zA-Z0-9_$-]{6,15}$/;

function SignUp(){
    if (NameRegex.test(RegName.value) && NameRegex.test(regSurName.value) && LogInRegex.test(regLogin.value) && passwordRegex.test(regPassword.value) && regPasswordAgain.value === regPassword.value){
        if (arr.some(res => res.Login === regLogin.value)) {
            messige.innerHTML = ("such entry already exists, create a new one");
            messige.style.color = "red";
            return false
        } 
        messige.innerHTML = "you have successfully registered";
        messige.style.color = "green"
    
     arr.push({  id:Date.now(),
                Name:RegName.value,
                Surname:regSurName.value,
                Login:regLogin.value,
                Password:regPassword.value,
             })
            console.log(arr);
    }
    if (!NameRegex.test(RegName.value)) {
        Namemessige.innerHTML ="use one uppercase and several lowercase letters";
        Namemessige.style.color = "red"
    }else{
        Namemessige.innerHTML ="";
    }
    if (!NameRegex.test(regSurName.value)) {
        Surmessige.innerHTML ="use one uppercase and several lowercase letters";
        Surmessige.style.color = "red"
    }else{
        Surmessige.innerHTML ="";
    }
    if (!LogInRegex.test(regLogin.value)) {
        Regmessige.innerHTML ="use uppercase, lowercase letters and numbers";
        Regmessige.style.color = "red"
    }else{
        Regmessige.innerHTML ="";
    }
    if (!passwordRegex.test(regPassword.value)) {
        Pasmessige.innerHTML ="use uppercase, lowercase letters, numbers,  _ $ -";
        Pasmessige.style.color = "red"
    }else{
        Pasmessige.innerHTML ="";
    }
    if(!passwordRegex.test(regPasswordAgain.value)){
        PasAmessige.innerHTML ="repeat the password";
        PasAmessige.style.color = "red"
    }else{
        PasAmessige.innerHTML ="";
    }
}


const Login = document.querySelector(".Login")
const Password = document.querySelector(".Password")

function SignIn(){
    if(arr.some(res => Login.value !== res.Login || Login.value === "")){
        LogInMessige.innerHTML ="wrong login";
        LogInMessige.style.color = "red"
    }else{
        LogInMessige.innerHTML ="";
    }
    if(arr.some(res => Password.value !== res.Password || Password.value === "")){
        PasMessige.innerHTML ="wrong password";
        PasMessige.style.color = "red"
    }else{
        PasMessige.innerHTML ="";
    }
    if (arr.some(res => Login.value === res.Login && Password.value === res.Password)) {
        LogMessige.innerHTML = "you are logged in"
        LogMessige.style.color = "green"
        return true
    }else{
        LogMessige.innerHTML ="wrong data";
        LogMessige.style.color = "red"
        return false
    }
}

















// function SignIn(){
//     if (LogInRegex.test(Login.value) && passwordRegex.test(Password.value)) {
//        if (arr.some(res => Login.value === res.Login && Password.value === res.Password)) {
//            LogMessige.innerHTML = "you are logged in"
//            LogMessige.style.color = "green"
//            return true
//        }else if(arr.some(res => Login.value !== res.Login)){
//           LogMessige.innerHTML ="wrong login";
//           LogMessige.style.color = "red"
//           return false
//        }else if(arr.some(res => Password.value !== res.Password)){
//           LogMessige.innerHTML ="wrong password";
//           LogMessige.style.color = "red"
//           return false
//        }
//    }else if(!LogInRegex.test(Login.value)){
//        messige.innerHTML ="for login, use one uppercase letter, several lowercase letters and numbers in the login field";
//         messige.style.color = "red"
//    }else if(!passwordRegex.test(Password.value)){
//         messige.innerHTML ="in the password field for login, use one uppercase letter, several lowercase letters, and one of the following symbols at the end (_ $ -)";
//        messige.style.color = "red"
//    }
// }