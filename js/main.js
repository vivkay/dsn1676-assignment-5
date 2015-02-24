var $add = $('.add');
var $form = $('.form');
var $list = $('.list');
var $button = $('.addbutton')

$button.addClass('addbutton');

$form.on('submit', function (e) {
    e.preventDefault();
    var $li = $('<li>');
    var $button = $('<button>');
    $button.html('X');
    $button.addClass ('checkbutton');
    
    $button.on('click', function () {
       $li.remove(); 
    });
    
    var $addH2 =$('<h2>').html($add.val());
    $addH2.append($button);
    
    $addH2.on('click', function () {
    $addH2.addClass('strike')();
    });
        
    $li.append($addH2);
    
    $list.append($li);
 
});
    
