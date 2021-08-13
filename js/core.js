// var body = document.querySelector("body");

// body.navmain-active toggle 2021-06-06
document.querySelector('a._amenu').addEventListener("click", menuToggle);
//body.addEventListener("click", menuToggle);

function menuToggle(ev) {"use strict";
	ev.preventDefault();
	ev.stopImmediatePropagation();	
	if (body.classList.contains('navmain-active')){
		document.querySelectorAll('li._node').forEach(menuNode => {
			menuNode.classList.remove('navhover');
		})
		body.classList.remove('navmain-active');        			
		/*if($(window).scrollTop()>0){$('body').addClass('navmain-hidden');$('nav').css('top', '');}*/
	} else {
		body.classList.add('navmain-active');
		/*$('nav').css('top', $(window).scrollTop());*/
	}

};

// nav_main li._node toggle 2021-08-04
document.querySelectorAll('li._node').forEach(menuNode => {
	menuNode.addEventListener('click', menuNodeToggle)
	menuNode.addEventListener('mouseover', menuNodeToggle)
	menuNode.addEventListener('mouseout', menuNodeToggle)		
})	

function menuNodeToggle(ev) {
	ev.preventDefault();
	ev.stopImmediatePropagation();
	if ((ev.currentTarget.classList.contains('navhover')) && ((window.inputMode == 'mouse' && !body.classList.contains('navmain-active') && ev.type == 'mouseout') || (ev.type == 'click'))) {
		ev.currentTarget.classList.remove('navhover')
	} else if ((window.inputMode == 'mouse' && !body.classList.contains('navmain-active') && ev.type == 'mouseover') || (ev.type == 'click')){
		var otherNodes = Array.prototype.slice.call(ev.currentTarget.parentNode.children);
		otherNodes.forEach(node => {
			node.classList.remove('navhover')
		});
		ev.currentTarget.classList.add('navhover');	
	}
}

// DEFAULT .on('click','html') 2016-03-30 A
document.querySelector('html').addEventListener("click", htmlReset);
function htmlReset(){
	document.querySelectorAll('li._node').forEach(menuNode => {
		menuNode.classList.remove('navhover');
	})
	body.classList.remove('_sided');
	body.classList.remove('navmain-active'); 
	//if($(window).scrollTop()>0){$('body').addClass('navmain-hidden').css('top', '');}
};