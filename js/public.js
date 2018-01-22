//滚动页面改变header背景透明度
$(document).ready(function(){
	var time;
	$(window).scroll(function(){
		clearTimeout(time);
		if ($(window).scrollTop() > 40) {
			time = setTimeout(function(){
				$(".header_top").addClass("header_background");
			})
		} else{
			time = setTimeout(function(){
				$(".header_top").removeClass("header_background");
			})
		}
//			console.log($(window).scrollTop())
	})
})
//点击返回上一页面
$(function(){
	$(".header_return").click(function(){
		window.history.back();
	})
})
