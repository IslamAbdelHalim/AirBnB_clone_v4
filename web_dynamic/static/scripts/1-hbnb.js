$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    let amenities = [];
    if ($(this).is(':checked')) {
      amenities.push($(this).attr('data-name'));
    } else {
      amenities.splice(amenities.indexOf($(this).attr('data-name')), 1);
    }
    $('.amenities h4').text(amenities.join(', '));
})
});