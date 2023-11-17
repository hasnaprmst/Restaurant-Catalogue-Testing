/* eslint-disable no-undef */
import FavButtonInitiator from '../src/scripts/utils/fav-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Unfavorite A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unfavorite widget when the resto has been favorited', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unfav this resto"]')).toBeTruthy();
  });

  it('should not display favorite widget when the resto has been favorited', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="fav this resto"]')).toBeFalsy();
  });

  it('should be able to remove favorited resto from the list', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unfav this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  it('should not throw error if the unfavorited resto is not in the list', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: 1,
      },
    });

    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unfav this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
