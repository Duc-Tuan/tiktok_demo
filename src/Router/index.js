// routes config
import config from '~/configs';

// headerOnly
import { HeaderOnly } from '~/layouts';

// pages
import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Update from '~/pages/Update';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRouters = [
  { path: config.routes.home, component: Home },
  { path: config.routes.follwing, component: Follwing },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.update, component: Update, layout: HeaderOnly },
];

const privateRouters = [];

export { publicRouters, privateRouters };
