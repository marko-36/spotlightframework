//-- MODALS 2021-06-12 --*/
modalshow = (modalID) => {
	$('body').addClass('_hasmodal');	
	$('#'+modalID).addClass('_modal-active').find('._focusable').focus();
}

modalhide = () => {
	$('body').removeClass('_hasmodal');
	$('div._modal-active').removeClass('_modal-active');
}

modalswap = (modalswapid) => {
	$('div._modal-active').removeClass('_modal-active');
	$('#'+modalswapid).addClass('_modal-active').find('._focusable').focus();
}

$(document).on('click','a[data-modalshowid]',(function(e) {e.preventDefault();modalshow($(this).attr('data-modalshowid'));}));
$(document).on('click','#_modaloverlay, a._modal-hide',(function(e) {e.preventDefault();modalhide('div._modal-active');}));
$(document).on('click','a[data-modalswapid]',(function(e) {e.preventDefault();modalswap($(this).attr('data-modalswapid'));}));