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
	// 商品数量加减
	$(".num_add").click(function(){
		var _num = parseInt($(this).siblings(".num").text());
		_num += 100;
		$(this).prev().text(_num)
	})
	$(".minus").click(function(){
		var _num = parseInt($(this).siblings(".num").text());
		if(_num > 1){
			_num -=100;
		}else{
			_num = 0;
		}
		$(this).next().text(_num)
	});
	
	
})

