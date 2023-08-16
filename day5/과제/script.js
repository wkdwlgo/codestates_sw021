//id
const inputId = document.querySelector(".id");
const idSuccessMessage = document.querySelector(".id-success-message");
const idFailureMessage = document.querySelector(".id-failure-message");
//pw
const inputPassword = document.querySelector(".password");
const pwSuccessMessage = document.querySelector(".pw-success-message");
const pwFailureMessage = document.querySelector(".pw-failure-message");
//pwck
const inputPasswordCheck = document.querySelector(".passwordCheck");
const pwckSuccessMessage = document.querySelector(".pwck-success-message");
const pwckFailureMessage = document.querySelector(".pwck-failure-message");

function validateId(id) {
  if (
    id.length < 8 ||
    id.length > 12 ||
    !/^[a-z]/.test(id[0])
  ) {
    return false;
  }
  return true;
}

function validatePw(pw) {
  if (
    pw.length < 8 ||
    pw.length > 16 ||
    !/[a-zA-Z]/.test(pw)||
    !/[0-9]/.test(pw)||
    !/[~!@#\#$%<>^&*]/.test(pw)||
    /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(pw)
  ) {
    return false;
  }
  return true;
}

function validatePw(pw) {
  if (
    pw.length < 8 ||
    pw.length > 16 ||
    !/[a-zA-Z]/.test(pw)||
    !/[0-9]/.test(pw)||
    !/[~!@#\#$%<>^&*]/.test(pw)||
    /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(pw)
  ) {
    return false;
  }
  return true;
}

function validatePwck(pwck) {
  console.log(pw)
  if (
    pwck!==pw
  ) {
    return false;
  }
  return true;
}





inputId.addEventListener("keyup", (event) => {
  const value = event.target.value.toLowerCase();
  console.log(value)
  if (!validateId(value)) {
    idSuccessMessage.classList.add("hide");
    idFailureMessage.classList.remove("hide");
  } else {
    idSuccessMessage.classList.remove("hide");
    idFailureMessage.classList.add("hide");
  }
});


inputPassword.addEventListener("keyup", (event) => {
  const value = event.target.value;
  console.log(value)
  if (!validatePw(value)) {
    pwSuccessMessage.classList.add("hide");
    pwFailureMessage.classList.remove("hide");
  } else {
    pwSuccessMessage.classList.remove("hide");
    pwFailureMessage.classList.add("hide");
  }
  pw = value;//중요: 변수 스코프로 인해 함수 밖에서 선언 안해도 validatePwck()함수에서 pw 사용 가능

});



inputPasswordCheck.addEventListener("keyup", (event) => {
  const value = event.target.value;
  console.log(value)
  if (!validatePwck(value)) {
    pwckSuccessMessage.classList.add("hide");
    pwckFailureMessage.classList.remove("hide");
  } else {
    pwckSuccessMessage.classList.remove("hide");
    pwckFailureMessage.classList.add("hide");
  }
});
