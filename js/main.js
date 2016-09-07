requirejs.config({
	paths:{
		jquery:'jquery'
	}
});
requirejs(['jquery','backtop'],function($, backtop){
	
	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'go',
	// 	pos: 200,
	// 	speed: 2000
	// });

	$('#backTop').backtop({
		mode: 'move'
	});


	// var scroll = new scrollto.ScrollTo({
	// 	dest: 0,
	// 	speed: 800
	// });

	// $('#backTop').on('click', $.proxy(scroll.move, scroll));

	// $(window).on('scroll', function(){
	// 	checkPosition($(window).height());
	// });

	// checkPosition($(window).height());

	// function checkPosition(pos){
	// 	if ($(window).scrollTop() > pos) {
	// 		$('#backTop').fadeIn();
	// 	}else{
	// 		$('#backTop').fadeOut();
	// 	}	
	// }
})