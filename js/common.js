
document.write("<script type=\"text/javascript\" src=\"../../js/jquery-1.7.1.min.js\"></script>\n");
document.write("<script type=\"text/javascript\" src=\"../../js/bjqs-1.3.min.js\"></script>\n");


(function(){var a=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,b=document;if(!a||!b.querySelectorAll)return;var c=function(a){var b=[],c=0;for(;c<a.length;++c){b.push(a[c])}return Array.prototype.slice.call(b,0)};window.addEventListener("load",function(){c(b.querySelectorAll("a.skip, .skip a")).forEach(function(a){a.addEventListener("click",function(){var a=b.getElementById(this.href.split("#")[1]),c=a.getAttribute("tabindex"),e=b.defaultView.getComputedStyle(a,null).getPropertyValue("outline-width");a.setAttribute("tabindex",0);a.style.outlineWidth=0;a.focus();if(c===null)a.removeAttribute("tabindex");else a.setAttribute("tabindex",c)},false)})},false)})()


var target;
lm = "lmenu"+lm;

function disableSelection(target) {
	target.onselectstart = function () { return false }
	target.onmousedown = function () { return false }
	target.oncontextmenu = function () { return false }
}

window.onload = function() {
	try
	{
		disableSelection(document.body);
		document.getElementsByTagName("body")[0].className += lang;
		target = document.getElementById(lm);
		target.className = "on";
		target.getElementsByTagName("li")[sm].className += "sub";
	}
	catch (e){}


};		
	