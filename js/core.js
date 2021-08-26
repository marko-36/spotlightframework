var body = document.querySelector("body");
window.lastScrollDir = "up";
window.lastScrollTop = window.pageYOffset;
window.scrollTreshold = 10; //
window.menuAutoHide = false;
window.menuAutoClose = true; //

// body._navmain-active toggle 2021-06-06
document.querySelector('li._amenu a').addEventListener("click", menuToggle);
//body.addEventListener("click", menuToggle);

function menuToggle(ev) {"use strict";
	ev.preventDefault();
	ev.stopImmediatePropagation();	
	if (body.classList.contains('_navmain-active')){
		document.querySelectorAll('li._node').forEach(menuNode => {
			menuNode.classList.remove('navhover');
		})
		body.classList.remove('_navmain-active');
		document.querySelector('nav').style.top = null;	
		/*if($(window).scrollTop()>0){$('body').addClass('_navmain-hidden');$('nav').css('top', '');}*/
	} else {
		body.classList.add('_navmain-active');
		/*$('nav').css('top', $(window).scrollTop());*/
		document.querySelector('nav').style.top = window.pageYOffset + 'px';
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
	if ((ev.currentTarget.classList.contains('navhover')) && ((window.inputMode == 'mouse' && !body.classList.contains('_navmain-active') && ev.type == 'mouseout') || (ev.type == 'click'))) {
		ev.currentTarget.classList.remove('navhover')
	} else if ((window.inputMode == 'mouse' && !body.classList.contains('_navmain-active') && ev.type == 'mouseover') || (ev.type == 'click')){
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
	body.classList.remove('_navmain-active'); 
	//if($(window).scrollTop()>0){$('body').addClass('_navmain-hidden').css('top', '');}
};

isBigScroll = (lastScrollTop, scrollTreshold) => {
	return (Math.abs(window.pageYOffset - lastScrollTop) > scrollTreshold) ? true : false
  }
  
  setScrollDir = (lastScrollTop) => {
	if (window.pageYOffset > lastScrollTop) {
	  window.lastScrollDir = "down";
	  console.log("down");  //demo
	  if (window.menuAutoHide) {body.classList.add('scrolledDown');}
	  return "down"
	} else {
	  window.lastScrollDir = "up";
	  console.log("up");    //demo
	  body.classList.remove('scrolledDown')
	  return "up"
	}
  }
  
  resetNav = () => {
	  document.querySelectorAll('li._node').forEach(menuNode => {
		menuNode.classList.remove('navhover');
	  })
	  document.querySelector('nav').style.top = null;
	  setTimeout(function(){ body.classList.remove('_navmain-active');}, 310);
	  body.classList.remove('scrolledDown')
  }
  
  window.onscroll = function() {
	if (document.querySelector('nav').offsetTop > window.pageYOffset) {
	  document.querySelector('nav').style.top = window.pageYOffset + 'px';
	  body.classList.remove('scrolledDown');
	}
  
	if (isBigScroll(lastScrollTop, 10)) {
	  setScrollDir(window.lastScrollTop);
  
	  if (body.classList.contains('_navmain-active') && window.menuAutoClose){
		if (document.querySelector('nav').offsetTop + document.querySelector('nav').offsetHeight + document.querySelector('#nav_main').offsetTop + document.querySelector('#nav_main').offsetHeight < window.pageYOffset) {
			resetNav(window.pageYOffset)
		} 
	  }
  
	  window.lastScrollTop = window.pageYOffset;
	}
  };