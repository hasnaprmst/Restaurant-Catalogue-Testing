/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unfavorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('.restos');
  I.see('Tidak ada resto untuk ditampilkan', '.restos');
});

Scenario('unliking one resto', async ({ I }) => {
  I.dontSeeElement('.resto-item__content a');
  I.see('Tidak ada resto untuk ditampilkan', '.restos');

  I.amOnPage('/');
  I.seeElement('.resto-item__content a');

  const firstResto = locate('.resto-item__content a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.wait();
  I.click(firstResto);

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restos');

  const favRestoTitle = await I.grabTextFrom('.resto-item__content a');
  assert.strictEqual(firstRestoTitle, favRestoTitle);

  I.seeElement('.resto-item__content a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada resto untuk ditampilkan', '.restos');
});
