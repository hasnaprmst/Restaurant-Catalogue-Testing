import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FavButtonInitiator from '../../utils/fav-button-initiator';

const Detail = {
  async render() {
    return `
          <div id="resto" class="resto"></div>
          <div id="favButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    // const favButtonContainer = document.querySelector('#favButtonContainer');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    // favButtonContainer.innerHTML = createFavRestoButtonTemplate();

    FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
      },
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default Detail;
