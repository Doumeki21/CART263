$(`#example-button`).on(`click`, function(event) {
  // $(this).hide();
  let input = $(`#example-text-input`).val();
  alert(input);
})

$(`#range-slider`).on(`change`, function(event) {
  let value = $(this).val();
  alert(value);
})
