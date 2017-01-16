function moveFrame(ele,attr,target){
	var iSpeed=5;
	var timer=setInterval(function(){
    var ele=document.getElementById(ele);
    ele.attr=ele['offset'+attr]+iSpeed;
	},3000)
}