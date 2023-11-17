import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
          <div class="content">
              <h2 class="content__heading">Explore Restaurant</h2>
              <div id="restos" class="restos">
       
              </div>
          </div>
          `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.restos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default List;
