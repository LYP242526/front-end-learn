function makeTwoRandomNum() {
	var a=(Math.random()*10).toFixed(2);
	var b=(Math.random()*10).toFixed(2);
	document.write(String(a)+","+String(b));
}
	makeTwoRandomNum();


function calATimes(n) {
	var i=n.split("a");
	var j=n.split("A");
	console.log((i.length-1)+(j.length-1));
}
	calATimes("a1A3434");
	calATimes("ehegeg");
	calATimes("fadfdfdfdf");

