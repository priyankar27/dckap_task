$(document).ready(function(){
	$('.toggle-menu, .toggle-menu-close').click(function(){
		$('.toggle-menu-close').toggle();
		$('.toggle-menu').toggle();
		$('.toggle-nav').toggle();
	});
});