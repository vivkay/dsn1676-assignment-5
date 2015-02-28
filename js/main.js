var $form = $('.form');
var $action = $('.action');
var $list = $('.list');

$form.on('submit', function () {
   e.preventDefault();

var actionValue = $action.val();
    console.log(actionValue);
});