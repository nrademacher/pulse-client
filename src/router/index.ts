import Cookies from 'js-cookie';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const token = Cookies.get('pulse-user-token');

  if (to.name !== 'LogIn' && !token) {
    next({ name: 'LogIn' });
  } else next();

  if (to.name === 'SignUp' && token) {
    next({ name: 'Messages' });
  }
});

export default router;
