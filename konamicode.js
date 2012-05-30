/*

    jQuery Konami Code Plugin
    by Kyle Bragger <kyle@kylebragger.com>
    Created May 11, 2009
    Do with it what you will.

    Usage:
    
    $(document).ready(function(){
        $('body').upUpDownDown({
            watchFor: [38,38,40,40,37,39,37,39,66,65],
            callback: function(){
                // Do some fancy shit here.
            }
        });
    });

*/
(function(jQuery) {
    jQuery.fn.upUpDownDown = function(o){
        var options = jQuery.extend({
                                        watchFor : [38,38,40,40,37,39,37,39,66,65],
                                        callback : function() { }
                                    }, o);
        
        var key_accum = [];
        var match = options.watchFor;

        $(document).keyup(function(e){
            var len = key_accum.push(e.keyCode ? e.keyCode : e.charCode);
            
            if(len > match.length) key_accum.shift();
            
            if (key_accum.join('-') == match.join('-'))
            {
                key_accum = [];
                if (options.callback)
                {
                    options.callback($(this));
                }
            }
        });
    }
})(jQuery);