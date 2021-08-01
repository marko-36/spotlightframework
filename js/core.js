var body = document.querySelector("body");

    /*-- toggle body.navmain-active 2021-06-06 --*/

document.querySelector('._amenu').addEventListener("click", (ev) => {
	ev.stopImmediatePropagation();
	body.classList.toggle('navmain-active');
});

    /*-- nav_main hover 2021-06-14 --*/
$(document).on('mouseover mouseout click','li._node', function(ev){
	ev.preventDefault();
	ev.stopImmediatePropagation();
	if ($(this).hasClass('navhover')){
		if ((window.inputMode == 'mouse' && ev.type == 'mouseout') || ev.type == 'click'){$(this).removeClass('navhover')}
	} else {
		if ((window.inputMode == 'mouse' && ev.type == 'mouseover') || ev.type == 'click'){$(this).addClass('navhover')}
	}
})

$(document).on('click','a._amenu, body.navmain-active',(function(event) {"use strict";
	event.preventDefault();
	if ($('body').hasClass('navmain-active')) {
		$('body').removeClass('navmain-active');        
		$('#nav_main').find('li').removeClass('navhover');		
		/*if($(window).scrollTop()>0){$('body').addClass('navmain-hidden');$('nav').css('top', '');}*/
	} else {
		$('body').addClass('navmain-active');
		/*$('nav').css('top', $(window).scrollTop());*/
	}
	event.stopImmediatePropagation();	
}));

/*-- NAV MOBILE #NAV_MAIN NAVHOVERs 2018-03-15 A --*/
/*var moves=0;
var validmouseleave = true;
$(document).on('mouseleave','#nav_main', (function (event) {"use strict";
	if (validmouseleave === true){
		$('nav li.navhover').removeClass('navhover');
	}else{
		event.stopImmediatePropagation();
	}
}));
$(document).on('mousemove', '#nav_main a', (function (event) {"use strict";
    if($(this).parent().parents().find('nav .navhover').lenght===0){	//deaktivuj předchůdce, pokud nemají navhover
    $('nav li.navhover').removeClass('navhover');}
    $(this).parent().siblings().removeClass('navhover');	//deaktivuj sourozence
    $(this).parent().find('li').removeClass('navhover');	//deaktivuj děti
    $(this).parent().addClass('navhover');
    event.stopImmediatePropagation();
	}
));
*/

//-- DEFAULT .on('click','html') 2016-03-30 A --*/

$(document).on('click','html',(function() {"use strict";
	$('#nav_main').find('li.navhover').removeClass('navhover');
	$('body').removeClass('_sided');
	if($(window).scrollTop()>0){$('body').addClass('navmain-hidden').css('top', '');}
}));