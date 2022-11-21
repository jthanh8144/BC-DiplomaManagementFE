import { Home } from '~/pages/Home';
import { Diplomas } from '~/pages/Admin';
import { Search } from '~/pages/Search';

const publicRoutes = [
  { path: '/', component: Home, layout: null },
  { path: '/diplomas', component: Search },
];
const privateRoutes = [{ path: '/admins/diplomas', component: Diplomas }];

export { publicRoutes, privateRoutes };
