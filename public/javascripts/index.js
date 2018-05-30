var links = $('.navbar ul li a');
$.each(links, function (key, va) {
    if (va.href == document.URL) {
        $(this).addClass('active');
    }
});

$(function(){ /* to make sure the script runs after page load */
    $('.blogPrevText').each(function(event){ /* select all divs with the  customer_experience class */
        var max_length = 200; /* set the max content length before a read more link will be added */

        if($(this).html().length > max_length){ /* check for content length */
            var short_content   = $(this).html().substr(0,max_length); /* split the content in two parts */
            var long_content    = $(this).html().substr(max_length);

            $(this).html(short_content+
                '...'+
                '<span class="more_text" style="display:none;">'+long_content+'</span>'); /* Alter the html to allow the read more functionality */
        }
    });
});

