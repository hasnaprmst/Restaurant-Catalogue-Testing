/* eslint-disable no-undef */
import FavButtonInitiator from '../src/scripts/utils/fav-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Favorite A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavButtonContainer();
  });
  it('should show the favorite button when the resto has not been favorited before', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="fav this resto"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the resto has not been favorited before', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unfav this resto"]')).toBeFalsy();
  });

  it('should be able to favorite the resto', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already favorited', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    // Tambahkan resto dengan ID 1 ke daftar resto yang disukai
    await FavoriteRestoIdb.putResto({ id: 1 });

    // Simulasikan pengguna menekan tombol suka resto
    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    // tidak ada resto yang ganda
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.deleteResto(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a resto when it has no id', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {},
    });

    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
