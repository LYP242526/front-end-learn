$(document).ready(function(){
	$("span.b").after("<div></div>");
	$("span").next().attr("class","aaa").text("谢天谢地你来啦");

	$(".a").toggleClass("b");

	$(".a").remove(".c");

	$("#b").after($("#a"));
});
