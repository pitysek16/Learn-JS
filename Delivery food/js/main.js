'use strict';

const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');
const restaurantTitle = document.querySelector('.restaurant-title');
const rating = document.querySelector('.rating');
const minPrice = document.querySelector('.price');
const category = document.querySelector('.category');
const modalBody = document.querySelector('.modal-body');
const modalPrice = document.querySelector('.modal-pricetag');
const buttonClearCart = document.querySelector('.clear-cart');


let login = localStorage.getItem('Login');

const cart = [];

const getData = async function(url){
  const response = await fetch(url);

  if(!response.ok){
    throw new Error(`Error ${url}, status ${response.statsus}!`);
  }
  return await response.json();
}

function toggleModal() {
  modal.classList.toggle('is-open');
}

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}

function authorized() {
  buttonAuth.style.display = 'none';
  buttonOut.style.display = 'flex';
  userName.textContent = login;
  userName.style.display = 'block';
  cartButton.style.display = 'flex';
  buttonOut.addEventListener('click', logOut);

  function logOut(){
    login = '';
    localStorage.removeItem('Login');
    buttonAuth.style.display = '';
    buttonOut.style.display = '';
    userName.style.display = '';
    cartButton.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    returnMain();
    checAuth();
    returnMain()
  }
}

function notAuthorized() {

  function logIn(e){
    e.preventDefault();

    if (loginInput.value.trim()) {
      loginInput.style.borderColor = '';
      login = loginInput.value;
      localStorage.setItem('Login', login);
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      toggleModalAuth();
      logInForm.reset();
      checAuth();
    } else {
      loginInput.style.borderColor = 'tomato';
    }
    
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


function createCardRestaurant(restaurant){
 
  const { image, name, price, kitchen, products, stars, time_of_delivery:timeOfDelivery } = restaurant;
  
  const card = document.createElement('a');
  card.className = 'card card-restaurant';
  card.products = products;
  card.info = [name, price, stars, kitchen];

  const cardHtml = `
			<img src="${image}" alt="image" class="card-image"/>
			<div class="card-text">
				<div class="card-heading">
					<h3 class="card-title">${name}</h3>
					<span class="card-tag tag">${timeOfDelivery}</span>
				</div>
				<div class="card-info">
					<div class="rating">
          ${stars}
					</div>
					<div class="price">От ${price} ₽</div>
						<div class="category">${kitchen}</div>
					</div>
			</div>
    `;
    
    card.insertAdjacentHTML('beforeend', cardHtml);

    cardsRestaurants.insertAdjacentElement('beforeend', card);
}


function createCardGood(goods){
  
  const { name, description, price, image, id } = goods;

  const card = document.createElement('div');
  card.className= 'card';
  
  const cardHtml = `
    <img src="${image}" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">${name}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">${description}
        </div>
      </div>
      <div class="card-buttons">
        <button class="button button-primary button-add-cart" id="${id}">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold card-price">${price} ₽</strong>
      </div>
    </div>
  `;

  card.insertAdjacentHTML('beforeend', cardHtml);
  cardsMenu.insertAdjacentElement('beforeend', card);

}

function openGoods(e){

  const target = e.target;
  const restaurant = target.closest('.card-restaurant');

  if(restaurant) {

    
    if (login) {
      
      const [ name, price, stars, kitchen ] = restaurant.info;

      cardsMenu.textContent = '';
      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');
    
      restaurantTitle.textContent = name;
      rating.textContent = stars;
      minPrice.textContent = `от ${price} ₽`;
      category.textContent = kitchen;

      getData(`./db/${restaurant.products}`).then(function(data){
        data.forEach(createCardGood);
      });

    } else {
      toggleModalAuth();
    }
    
  }
 
}

function returnMain(){
  containerPromo.classList.remove('hide');
  restaurants.classList.remove('hide');
  menu.classList.add('hide');
}


function addToCart(e){

  const target = e.target;
  const buttonAddToCart = target.closest('.button-add-cart');

  if(buttonAddToCart) {
    const card =  target.closest('.card');
    const title = card.querySelector('.card-title-reg').textContent;
    const cost = card.querySelector('.card-price').textContent;
    const id = buttonAddToCart.id;

    const food = cart.find(function(item){
      
      return item.id === id;
    });
    
    if(food) {
      food.count += 1;
    } else {
      cart.push({
        id,
        title,
        cost,
        count: 1
      });
    }
  }
}

function renderCart(){
  modalBody.textContent = '';

  cart.forEach(function({ id, title, cost, count }){
    const itemCart = `
      <div class="food-row">
					<span class="food-name">${title}</span>
					<strong class="food-price">${cost}</strong>
					<div class="food-counter">
						<button class="counter-button counter-minus" data-id="${id}">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button counter-plus" data-id="${id}">+</button>
					</div>
				</div>
    `;
    modalBody.insertAdjacentHTML('afterbegin', itemCart)
  });

  const totalPrice = cart.reduce(function(result, item){
    return result + (parseFloat(item.cost) * item.count);
  }, 0);

  modalPrice.textContent = totalPrice + ' ₽';

}

function changeCount(e){
  const target = e.target;

  if (target.classList.contains('counter-button')){
    const food = cart.find(function(item){
      return item.id === target.dataset.id;
    });

    if (target.classList.contains('counter-minus')) {
      food.count--;
      if (food.count === 0) {
        cart.splice(cart.indexOf(food), 1);
      }
    }
    if (target.classList.contains('counter-plus')) food.count++;

    renderCart();
  }

}

function init(){
  getData('./db/partners.json').then(function(data){
    data.forEach(createCardRestaurant);
  });

  modalBody.addEventListener('click', changeCount);

  buttonClearCart.addEventListener('click', function(){
    cart.length = 0;
    renderCart();
  });

  cardsRestaurants.addEventListener('click', openGoods);

  logo.addEventListener('click', returnMain);

  cartButton.addEventListener('click', function(){
    renderCart();
    toggleModal();
  });

  cardsMenu.addEventListener('click', addToCart);

  close.addEventListener('click', toggleModal);

  checAuth();

  new Swiper('.swiper-container', {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
}

init();