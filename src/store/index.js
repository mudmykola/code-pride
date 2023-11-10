import { createStore } from 'vuex';
import apiModule from './modules/apiModule';
import developers from '@/store/modules/developers';
import advantage from './modules/advantage';
import discover from './modules/discover';
import works from './modules/works';

export default createStore({
  modules: {
    apiModule, developers, advantage, discover, works
  },
});
