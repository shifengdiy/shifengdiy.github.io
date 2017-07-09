function normalEvent(){
	$('.nav_component .nav_list').bind('click', function(){
		var clickedTag = $(this);
		var order = clickedTag.attr('nav_tag');
		if(clickedTag.hasClass('active')){
			return
		} else {	
			//使用导航栏让列表和元素保持一致，具有active的元素展示
			$('.nav_component .nav_list.active').removeClass('active');
			$('.carousel_container .carousel_list.active').removeClass('active');
			clickedTag.addClass('active');
			$('.carousel_container .carousel_list:nth-child(' + order + ')').addClass('active');
		}
	});
}