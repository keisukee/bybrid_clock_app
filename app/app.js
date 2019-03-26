import Vue from 'nativescript-vue';

import AbsoluteClock from './components/AbsoluteClock';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(AbsoluteClock)])

}).$start();