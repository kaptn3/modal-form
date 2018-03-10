$(document).ready(function() {
  let open_link = $('.open_modal');

  function closeModal() {
    $(".modal").fadeOut(400);
  }

  open_link.click( function(event){
    let modal = $(this).attr('href');
    event.preventDefault();
    $("body").addClass('fixed');
    $(modal)
      .css("display", "flex")
      .hide()
      .fadeIn(400);    
  });

  $('span.close > a').click( function(event) {
    event.preventDefault();
    closeModal();
  });

  $(document).mouseup(function (e) {
    let container = $(".modal");
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

});