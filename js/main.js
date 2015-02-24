var $add = $('.add');
var $form = $('.form');
var $list = $('.list');
var $button = $('.addbutton')



$button.addClass('addbutton');

$form.on('submit', function (e) {
    e.preventDefault();
    var $li = $('<li>');
    var $button = $('<button>');

    var addValue = $add.val();
    var $addH2 = $('<h2>').html($add.val());

    $li.append($addH2);
    $list.append($li);
    $li.append($button);
    
    var $h2 = $('<h2>');
    $h2.on('click', function () {
    $h2.addClass('js-strike');
})
  
  var $remove = $('.remove');  

$remove.on('click', function () {
    $li.remove();
    
});
 
    
$button.addClass('addbutton');
})
       