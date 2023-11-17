import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Fav = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Your Favorite Restaurant</h2>
            <div id="restos" class="restos">
                <!-- Tambahkan elemen ini untuk menampilkan pesan -->
                <p id="noRestoMessage">Tidak ada resto untuk ditampilkan</p>
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    const noRestoMessage = document.querySelector('#noRestoMessage'); // Pilih elemen pesan

    if (restos.length === 0) {
      // Jika tidak ada resto yang ditampilkan
      noRestoMessage.style.display = 'block'; // Tampilkan pesan
    } else {
      noRestoMessage.style.display = 'none'; // Sembunyikan pesan jika ada resto
    }

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  },
};

export default Fav;
