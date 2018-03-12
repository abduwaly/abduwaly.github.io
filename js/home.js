/**
*	Created by aboo on 18-3-11.
*/
var Home = {

	getDummyData : function () {
		//load blog data
		$('body').append("<script src='./dummy/blogList.jsonp'></script>");
	},

	loadList : function(data){
		console.log('load',data.blogList);
		$('#main').html(""+data.blogList[0].content);
	},
	
	
	init : function(){
		
		$(document).ready(function(){
			
			Home.getDummyData();
			
		});
		
		
	}
}

Home.init();