import Example from './example/example';
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ExampleChg from './components/index';

Vue.use(iView);
Vue.use(ExampleChg);

new Vue({
  el: '#example',
  template: '<Example/>',
  components: {Example},
});
