$(window).on('load', function () {
  const checkList = {};
  const isChecked = [];
  $('input:checkbox').css('margin-right', '10px');
  $('input').click(function () {
    if ($(this).is(':checked')) {
      checkList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).is(':checked')) {
      delete checkList[$(this).attr('data-id')];
    }
    for (const check in checkList) {
      isChecked.push(checkList[check]);
    }
    $('.amenities h4').text(isChecked.join(', '));
  });
});
