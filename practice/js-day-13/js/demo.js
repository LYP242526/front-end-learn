function arr(x) {
	var a=x;
	var b=new Array();
	for(var i=0;i<a.length;i++) {
		if(a[i]>5) {
			b.push(a[i]);
		}
	}
	b.sort(function compare(m,n){return m-n});
	console.log(b);
}
	arr(['a', -10, 100, 20]);
	arr([5,8,1,6,3,13]);


	function changeDate() {
		var myDate=new Date("2012/12/3");
		console.log(myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate());
	}
	changeDate();