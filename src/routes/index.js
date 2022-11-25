import { HomeLayout } from '~/layouts';
import { Home } from '~/pages/Home';
import { Diplomas, AdminUsers } from '~/pages/Admin';
import { Search } from '~/pages/Search';

const publicRoutes = [
  { path: '/', component: Home, layout: HomeLayout },
  { path: '/diplomas', component: Search },
];
const privateRoutes = [
  { path: '/admins/diplomas', component: Diplomas },
  { path: '/admins', component: AdminUsers },
];

export { publicRoutes, privateRoutes };
