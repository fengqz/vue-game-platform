import axios from 'axios'
import store from '../store/index'
import router from '../router/index'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use = instance.interceptors.request.use;
//request拦截器
instance.interceptors.request.use(
  config => {
    if(store.state.token){
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
//respone拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => { //默认除了2XX之外的都是错误的，就会走这里
    if(error.response){
      switch(error.response.status){
        case 401:
          store.dispatch('UserLogout'); //可能是token失效，清楚它
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          });
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default {
  userRegister(data){
    return instance.post('/api/register', data);
  },
   userLogin(data){
    return instance.post('/api/posts', data);
  },
  getUser(){
    return instance.get('/api/user');
  },
  delUser(data){
    return instance.post('/api/posts', data);
  },

  gameclasify(data){
    return instance.get('/api/gameclasify',data);
  },
  getdata(dataurl){
    return instance.get(dataurl);
  }
}
