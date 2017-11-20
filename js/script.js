jQuery(document).ready(function() {

    // Adding the X button
    jQuery('.ui-message').append('<span class="ui-close">X</span>');

    // Handling the click event
    jQuery('.ui-close').click(function() {
        jQuery(this).parents('.ui-message').fadeOut();
    })

    // Initially hide the answers for the FAq section
    jQuery('.answer').hide();

    // Handing the FAQ question click
    jQuery('.faq h4').click(function() {
        jQuery(this).next('.answer').slideToggle();
    });

    jQuery('.faq h4').addClass('faq-question');

    // Dynamically load about content 
    // 若在本地调试, 请看: http://www.jianshu.com/p/0285b40a7f33
    jQuery('#about').click(function() {
        jQuery('.about-placeholder').load('about.html .body-text');
        return false;
    });

});