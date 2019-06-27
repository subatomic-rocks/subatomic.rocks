/**
 * Mobile responsive attributes for WOW.js
 * by Matheus Pratta <https://matheus.io>
 * Requires: jQuery, WOW.js
 * GitHub: https://github.com/MatheusMK3/wow-mobile
 */
(($) => {
    // Our breakpoint in pixels
    var breakpoint = 767;

    // The only function in our library, called when window resize happens
    var wowCheckCurrentResolution = function wowCheckCurrentResolution () {
        // The WOW.js attributes we will be looking at
        var checkAttributes = ['delay', 'duration'];

        // Loop through every WOW.js object containing the class .wow-mobile
        $('.wow.wow-mobile').each(function () {
            // Test for mobile size
            var isMobile = false;
            if ($(window).width() <= breakpoint)
                isMobile = true;

            // Process every of the attributes, take default values and apply if desired
            for (var i = 0, attribute; attribute = checkAttributes[i++];) {
                // Check if the attribute is set first
                if ($(this).attr('data-wow-' + attribute)) {
                    // Check if we already saved the default state
                    if (!$(this).data('wow-mobile-default-' + attribute))
                        $(this).data('wow-mobile-default-' + attribute, $(this).attr('data-wow-' + attribute));

                    // Apply responsive
                    if (isMobile) {
                        $(this).attr('data-wow-' + attribute, $(this).attr('data-wow-mobile-' + attribute));
                    } else {
                        $(this).attr('data-wow-' + attribute, $(this).data('wow-mobile-default-' + attribute));
                    }
                }
            }
        });
    }

    // Set-up window events for resize
    $(window).on('resize', wowCheckCurrentResolution);

    // Run for first time
    wowCheckCurrentResolution();
})(jQuery);