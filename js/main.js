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
    
    $addh2.on('click', function () {
    $h2.addClass('strike');
    
    var addValue = $add.val();
    var $addH2 = $('<h2>').html($add.val());

    $li.append($addH2);
    $list.append($li);
    $li.append($button);
    

})
  
  var $remove = $('.remove');  

$remove.on('click', function () {
    $li.remove();
    
    $button.addClass('addbutton');
})
       
    
    
});
 
    
