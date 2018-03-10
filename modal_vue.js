Vue.component('modal', {
  template: '#modal-template'
});

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false,
    showModal2: false
  },
  methods: {
    open: function (number) {
      document.body.classList.add('fixed-for-mobile');
      this.showModal = true;
    },
    close: function (number) {
      ocument.body.classList.remove('fixed-for-mobile');
      this.showModal = false;
    }
  }
});