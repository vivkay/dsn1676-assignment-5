var $form = $('.form');
var $action = $('.action');
var $list = $('.list');
var $checkbox = $('.checkbox');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $actionH2 = $('<h2>').html($action.val());
    var $checkbox = $('<button>').addClass('checkbox');
    
    $li.append($actionH2);
    $li.append($checkbox);
    $list.append($li);

});
  
$list.on('click', 'h2', function () {
    $(this).addClass('js-strike');
});

$list.on('click', 'button', function () {
        $(this).parent().remove();
});