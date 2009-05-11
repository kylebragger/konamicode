/*

    jQuery Konami Code Plugin
    by Kyle Bragger <kyle@kylebragger.com>
    Created May 11, 2009
    Do with it what you will.

    Usage:
    
    $(document).ready(function(){
        $('body').upUpDownDown({
            watchFor: '38384040373937396665', // String of keyCode and charCodes to watch for
                                              // 38384040373937396665 == up up down down left right left right B A
            callback: function(){
                // Do some fancy shit here.
            }
        });
    });

*/
(function(jQuery) {
    jQuery.fn.upUpDownDown = function(o){
        var options = jQuery.extend({
                                        watchFor : '38384040373937396665',
                                        callback : function() { }
                                    }, o);
        
        var key_accum = '';
        var match = options.watchFor || '38384040373937396665';
        
        $(document).keyup(function(e){
            key_accum = key_accum + (e.keyCode ? e.keyCode : e.charCode);
            if (key_accum.indexOf(match) != -1)
            {
                key_accum = '';
                if (options.callback)
                {
                    options.callback($(this));
                }
            }
        });
    }
})(jQuery);