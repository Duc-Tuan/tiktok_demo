// routes config
import routesConfig from '~/configs/routes';

// headerOnly
import { HeaderOnly } from '~/component/Layouts';

// pages
import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Update from '~/pages/Update';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRouters = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.follwing, component: Follwing },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.update, component: Update, layout: HeaderOnly },
];

const privateRouters = [];

export { publicRouters, privateRouters };
