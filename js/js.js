$(document).ready(function ($) {
    //initialise Stellar.js
    $(window).stellar();
    //Cache some variables
    var links = $('#nav, #subnav').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    //Setup waypoints plugin
    console.log(links);
    console.log(slide)

    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        $('#nav li[data-slide="1"]').hasClass('active') 

        $('#nav li[data-slide="' + dataslide + '"]').addClass('active').siblings().removeClass('active');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        // if (direction === 'down') {
        //     $('#nav li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        //     console.log('down');
        // }
        // // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        // //remove the active class from the next navigation link
        // else {
        //     $('#nav li[data-slide="' + (dataslide - 1) + '"]').addClass('active').next().removeClass('active');
        //     console.log('up');
        // }
        
        if ($('#nav li[data-slide="1"]').hasClass("active")){
        	$('#nav').find('a').css('color', 'black');
        	console.log('success');
        }
    });
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('#nav li[data-slide="1"]').addClass('active');
            $('#nav li[data-slide="2"]').removeClass('active');
        }
    });
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    $('#clothes_nav').mouseenter(function(){
    	$('#subnav').slideDown(400, function(){});
    })
    $('.slide').mouseenter(function(){
        $('#subnav').slideUp(400);
    })

// DOWN ARROW ANIMATION ////////////
	$('.button').delay(500).animate({ top: 610}, {duration: 1000, easing: 'easeOutBounce'});

// ADD TOP LINK NAV ///////

	// if ( $('#nav li[data-slide="2"]').hasClass('active')) {
	// 	$('#clothes_nav').prepend('<li id="top_nav" data-slide = "1"><a href="#">top</a></li>');
	// 	console.log('nav');
	// }


    // if( $('#button').is(':visible') ) {
    // 	console.log('bounce');
    // }

    // $('.button').hover(function(){
    // 	$(this).css('background-image', 'url(../images/grayDownArrow.png)')
    // })
});