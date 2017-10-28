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

        this.default = {
            showTitle: true,
            className: 'text-ellipsis-element',
            dataValueName: 'real-value',
            hoverExpand:false
        }

        if (n === undefined || typeof n != 'number') {

            throw Error('textEllipsis should have a number parameter')
        }

        // This is the easiest way to have default options.
        this.settings = $.extend(this.default, options);

        var el = this;


        el.text(textellipsis(text, n));

        el.data(this.settings.dataValueName, text)
        if (!el.hasClass(this.settings.className)) {

            el.addClass(this.settings.className)
        }



        // Set title

        if (this.settings.showTitle) el.attr('title', el.data(this.settings.dataValueName));

        if(!this.settings.hoverExpand) return el;


        // Events

        
        el.off('mouseover mouseleave');

        el.on('mouseover', function () {

            el.text(el.data(el.settings.dataValueName))

        });

        el.on('mouseleave', function () {

            el.text(textellipsis(el.data(el.settings.dataValueName), n));
        })



        return el;

    };

}(jQuery));