/*

    jQuery Konami Code Plugin
    by Kyle Bragger <kyle@kylebragger.com>
    Created May 11, 2009
    Do with it what you will.

    Usage:
    
    $(document).ready(function(){
        $('body').upUpDownDown({
            watchFor: '38384040373937399897', // String of keyCode and charCodes to watch for
                                              // 38384040373937399897 == up up down down left right left right B A
            callback: function(){
                // Do some fancy shit here.
            }
        });
    });

*/
(function(jQuery) {
    jQuery.fn.upUpDownDown = function(o){
        var options = jQuery.extend({
                                        watchFor : '38384040373937399897',
                                        callback : function() { }
                                    }, o);
        
        var key_accum = '';
        var match = options.watchFor || '38384040373937399897';
        
        $(document).keypress(function(e){
            key_accum = key_accum + (e.keyCode ? e.keyCode : e.charCode);
            if (key_accum == match)
            {
                if (options.callback)
                {
                    options.callback($(this));
                }
            }
        });
    }
})(jQuery);