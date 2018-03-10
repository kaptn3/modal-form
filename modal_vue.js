Vue.component('modal', {
  template: '#modal-template'
});

// start app
new Vue({
  el: '#app',
  data: {
    showModal: ''
  },
  methods: {
    open: function (name) {
      console.log(name);
      document.body.classList.add('fixed-for-mobile');
      this.showModal = name;
    },
    close: function (number) {
      ocument.body.classList.remove('fixed-for-mobile');
      this.showModal = '';
    }
  }
});

// передавать значения в виде open(showModal)