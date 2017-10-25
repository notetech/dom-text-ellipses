/**
 * 
 * Author : Sarath TK 
 * description: A simple Dom Element Text Shortening Plugin :)
 * Usage: 
 *  ``` $('p').textEllipsis(30,{showTitle: true}) ```
 */

(function ($) {

    function textellipsis(text, n) {

        return (text.length > n) ? text.substr(0, n - 1) + '...' : text;
    }

    $.fn.textEllipses = function (text, n, options) {


        if (n === undefined || typeof n != 'number') {

            throw Error('textEllipsis should have a number parameter')
        }

        // This is the easiest way to have default options.
        var settings = $.extend({
            showTitle: true,
            className: 'text-ellipsis-element',
            dataValueName: 'real-value',
            hoverExpand:false
        }, options);

        var el = this;


        el.text(textellipsis(text, n));

        el.data(settings.dataValueName, text)
        if (!el.hasClass(settings.className)) {

            el.addClass(settings.className)
        }



        // Set title

        if (settings.showTitle) {
            el.attr('title', el.data(settings.dataValueName));
        }

        if(!settings.hoverExpand) {
            return el;
        }

        // Events

        
        el.off('mouseover mouseleave');

        el.on('mouseover', function () {

            el.text(el.data(settings.dataValueName))

        });

        el.on('mouseleave', function () {

            el.text(textellipsis(el.data(settings.dataValueName), n));
        })



        return el;

    };

}(jQuery));