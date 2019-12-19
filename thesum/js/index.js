$(document).ready(function(){

  $('li').hover(function(){
      var path = $(this).find('img')[0];
      $(path).attr('src', path.src.replace(/.gif/g, '_active.gif'));

  	 }, function(){
  		var path = $(this).find('img')[0];
        $(path).attr('src', path.src.replace(/_active.gif/g, '.gif'));
  });

});