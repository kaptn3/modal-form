Vue.component('modal', {
  template: '#modal-template'
});

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false
  },
  methods: {
    open: function () {
      document.body.classList.add('fixed-for-mobile');
      this.showModal = true;
    }
  }
});