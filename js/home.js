/**
*	Created by aboo on 18-3-11.
*/
var Home = {

	blogList : '',

	getDummyData : function () {
		$.getJSON('./dummy/blogList.json',function (data) {
			Home.blogList = data.blogList;
			console.log(Home.blogList);
			Home.loadList(Home.blogList);
		})
	},

	loadList : function(data){
		$(data).each(function (item) {
			console.log(item,this);
			$('#all-blog-list-content').append(Home._templateBlogItem(this));
		});

	},

	swipe : function () {
		var bgImgs = ['k1.jpg','k2.jpg','k3.jpg','k4.jpg'];
		setInterval(function () {
			$('.black-board img').attr('src','./img/'+Home.loopNext(bgImgs));
		},3000);
	},

	loopNext : function (arr) {
		arr.push(arr.shift());
		return arr[0];
	},
	
	
	init : function(){
		
		$(document).ready(function(){
			
			Home.getDummyData();
			Home.swipe();
			
		});
		
		
	},

	_templateBlogItem : function (blog) {

		// if(blog.title.length>15){
		// 	blog.title = '' + blog.title.substr(0,15) + '...';
		// }
		
		return '\
			<div class="blog-item" data-blogId="'+ blog.id +'">\
				<h3 class="blog-title"><a href="#">'+ blog.title +'</a></h3>\
				<p class="blog-brief"> '+ blog.brief +' </p>\
				<div class="blog-item-bottom">\
					<div class="bottom-left publish-time">'+ blog.publish_time +'</div>\
					<div class="bottom-right">\
						<div class="blog-like">\
							<div class="icon icon-like"></div><span>'+ blog.like +'</span>\
						</div>\
						<div class="blog-read-count">\
							<div class="icon icon-read"></div><span>'+ blog.view +'</span>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="item-separator"></div>\
		';
	}


}

Home.init();