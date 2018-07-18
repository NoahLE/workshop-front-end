import 'babel-polyfill';
import Vue from "vue";
import App from "./components/App.vue";

let v = new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  },
});
