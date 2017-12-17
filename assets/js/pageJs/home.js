setTimeout(function() {
  //your code to be executed after 1 second
$(document).ready(function () {
    setTimeout(function(){
        $('.hide').fadeIn(100);
    }, 500);
});
$(document).ready(function () {
    setTimeout(function(){
        $('.paint').fadeIn(1000);
    }, 3500);
});

	$(document).ready(function () {
    setTimeout(function(){
        $('.hide').fadeOut(500);
    }, 3500);
});
	$(document).ready(function () {
    setTimeout(function(){
        $('.paint2').fadeIn(2000);
    }, 4000);
});

}, 3000);