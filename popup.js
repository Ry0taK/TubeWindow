function parseURL(url){
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	var match = url.match(regExp);
	return (match && match[7].length == 11) ? match[7] : false;
}

document.getElementById("button").addEventListener("click", function(){
	let url = document.getElementById("url").value;
	let id = parseURL(url);
	if(id){
		window.open(`https://www.youtube.com/embed/${id}`,'_blank','width=560,height=315');
	}
});
