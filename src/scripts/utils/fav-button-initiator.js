import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createFavRestoButtonTemplate, createUnfavRestoButtonTemplate } from '../views/templates/template-creator';

const FavButtonInitiator = {
  async init({ favButtonContainer, resto }) {
    this._favButtonContainer = favButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderUnfav();
    } else {
      this._renderFav();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderFav() {
    this._favButtonContainer.innerHTML = createFavRestoButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderUnfav() {
    this._favButtonContainer.innerHTML = createUnfavRestoButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default FavButtonInitiator;
