window.lastScrollDir = "up";
window.lastScrollTop = window.pageYOffset;
window.scrollTreshold = 10; //


isBigScroll = (lastScrollTop, scrollTreshold) => {
  return (Math.abs(window.pageYOffset - lastScrollTop) > scrollTreshold) ? true : false
}

setScrollDir = (lastScrollTop) => {
  if (window.pageYOffset > lastScrollTop) {
    window.lastScrollDir = "down";
    console.log("down");  //demo
    body.classList.add('scrolledDown');
    return "down"
  } else {
    window.lastScrollDir = "up";
    console.log("up");    //demo
    body.classList.remove('scrolledDown');  
    return "up"
  }
}

resetNav = () => {
    document.querySelectorAll('li._node').forEach(menuNode => {
      menuNode.classList.remove('navhover');
    })
    body.classList.remove('navmain-active');
    document.querySelector('nav').style.top = null;
    //body.classList.remove('scrolledDown');
}

window.onscroll = function() {   
  if (isBigScroll(lastScrollTop, 10)) {
    setScrollDir(window.lastScrollTop);
    if (body.classList.contains('navmain-active')){
      if (body.classList.contains('scrolledDown') &&
      document.querySelector('nav').offsetTop + document.querySelector('nav').offsetHeight + document.querySelector('#nav_main').offsetTop + document.querySelector('#nav_main').offsetHeight < window.pageYOffset) {
          resetNav(window.pageYOffset)

      } else if (document.querySelector('nav').offsetTop > window.pageYOffset) {
        resetNav(window.pageYOffset)
    }
  }
    window.lastScrollTop = window.pageYOffset;
  }
};