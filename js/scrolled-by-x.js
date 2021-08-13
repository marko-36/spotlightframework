window.lastScrollDir = "up";
window.lastScrollTop = window.pageYOffset;
window.scrollTreshold = 10;

isBigScroll = (lastScrollTop, scrollTreshold) => {
  return (Math.abs(window.pageYOffset - lastScrollTop) > scrollTreshold) ? true : false
}

setScrollDir = (lastScrollTop) => {
  if (window.pageYOffset > lastScrollTop) {
    window.lastScrollDir = "down";
    console.log("down");
    body.classList.add('scrolledDown');
    return "down"
  } else {
    window.lastScrollDir = "up";
    console.log("up");    
    body.classList.remove('scrolledDown');  
    return "up"
  }
}

 window.onscroll = function() {    
  if (isBigScroll(lastScrollTop, window.scrollTreshold)) {
    setScrollDir(window.lastScrollTop);
    window.lastScrollTop = window.pageYOffset;
  }
};