import { createStore } from 'vuex';
import apiModule from './modules/apiModule';
import developers from '@/store/modules/developers';

export default createStore({
  modules: {
    apiModule, developers
  },
});
