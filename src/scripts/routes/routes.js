import List from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': List,
  '/list': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
