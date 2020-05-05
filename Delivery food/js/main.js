const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const loginError = document.querySelector('.login-error ');

let login = localStorage.getItem('Login');

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}



function authorized() {
  console.log('Авторизован');
  buttonAuth.style.display = 'none';
  buttonOut.style.display = 'block';
  userName.textContent = login;
  userName.style.display = 'block';

  buttonOut.addEventListener('click', logOut);

  function logOut(){
    login = '';
    localStorage.removeItem('Login');
    buttonAuth.style.display = '';
    buttonOut.style.display = '';
    userName.style.display = '';
    loginError.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checAuth();
  }
}

function notAuthorized() {
  console.log('Не авторизован');

  function logIn(e){
    e.preventDefault();
    login = loginInput.value;

    localStorage.setItem('Login', login);

    if (login) {
      toggleModalAuth();
    } else {
      loginError.style.display = 'block';
    }

    
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checAuth();
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}





function checAuth(){
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checAuth();