/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const createRestoDetailTemplate = (resto) => `
    <h1 class="resto__title">${resto.restaurant.name}</h1>
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.restaurant.name}" />
    <div class="resto__info">
        <h3>Information</h3>
        <div class="resto__info__title"><p>Adress</p></div>
        <p>${resto.restaurant.address}, ${resto.restaurant.city}</p>
        <div class="resto__info__title"><p>Rating</p></div>
        <p>⭐️ ${resto.restaurant.rating}</p>
        <div class="resto__info__title"><p>Categories</p></div>
        <p class="resto__info__categories">${resto.restaurant.categories.map((category) => `
            <span class="resto__info__category">${category.name}</span>`).join('')}</p>
        <div class="resto__info__title"><p>Description</p></div>
        <p>${resto.restaurant.description}</p>
    </div>

    <div class="resto-menus__heading">Menus</div>
    <div class="resto-menus">
        <div class="resto-menus__foods">
            <h3>Foods</h3>
            <ul>${resto.restaurant.menus.foods.map((food) => `
                <li>${food.name}</li>`).join('')}</ul>
        </div>
        <div class="resto-menus__drinks">
            <h3>Drinks</h3>
            <ul>${resto.restaurant.menus.drinks.map((drink) => `
                <li>${drink.name}</li>`).join('')}</ul>
        </div>
    </div>

    <div class="resto-review__heading">Customer Reviews</div>
    <div class="resto-review">${resto.restaurant.customerReviews.map((review) => `
        <div class="review-item">
            <div class="review-item__header">
                <p class="review-item__header__name">${review.name}</p>
                <p class="review-item__header__date">${review.date}</p>
            </div>
            <div class="review-item__content">
                <p>${review.review}</p>
            </div>
        </div>
        `).join('')}
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="resto-item">
        <div class="resto-item__header">
            <img class="lazyload resto-item__header__poster" alt="${resto.name}"
                src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
            <div class="resto-item__header__rating">
                <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
            </div>
        </div>
        <div class="resto-item__content">
            <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
            <p>${resto.description}</p>
        </div>
    </div>
`;

const createFavRestoButtonTemplate = () => `
    <button aria-label="fav this resto" id="favButton" class="fav">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnfavRestoButtonTemplate = () => `
    <button aria-label="unfav this resto" id="favButton" class="fav">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createFavRestoButtonTemplate,
  createUnfavRestoButtonTemplate,
};
