function closeModal(){
  $(".modal").fadeOut(400);
}

$(document).ready(function() {
  function modalForm(modal, link) {
    console.log($('#sign_form'));
    link.click( function(event){
      event.preventDefault();
      $("body").addClass('fixed');
      modal
        .css("display", "flex")
        .hide()
        .fadeIn(400);    
    });

    $('span.close > a').click( function(event) {
      event.preventDefault();
      closeModal();
    });

    $(document).mouseup(function (e) {
      let container = $(".modal_dialog");
      if (container.has(e.target).length === 0){
        closeModal();
      }
    });

    document.addEventListener('keyup', function(e) {
      let key = e.key + e.location;
      if (key == 'Escape0') {
        closeModal();
      }
    });
  }

  modalForm($('#sign_form'), $('a#sign_link'));
});


