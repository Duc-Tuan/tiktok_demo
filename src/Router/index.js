// headerOnly
import { HeaderOnly } from '~/component/Layouts';

// pages
import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Update from '~/pages/Update';
import Search from '~/pages/Search';

const publicRouters = [
  { path: '/', component: Home },
  { path: '/follwing', component: Follwing },
  { path: '/search', component: Search, layout: null },
  { path: '/update', component: Update, layout: HeaderOnly },
];

const privateRouters = [];

export { publicRouters, privateRouters };
