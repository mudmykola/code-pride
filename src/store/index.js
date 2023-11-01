import { createStore } from 'vuex';
import apiModule from './modules/apiModule';
import developers from '@/store/modules/developers';
import advantage from './modules/advantage';

export default createStore({
  modules: {
    apiModule, developers, advantage
  },
});
