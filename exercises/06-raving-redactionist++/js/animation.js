$(`#secret-document`).on(`click`, function(event) {
  $(`.top-secret`).fadeOut(200, function() {
    $(this).fadeIn(2000);
  });
});
