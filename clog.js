/**
 *  author: Mervyn < yangmingyuan@suishipen.com >
 *  createTime: 2016-4-8
 *  description: clog is accept 3 params, the first param can be a array,object,date,number or string, the second param is the name of you defined.
 *  the third param is a bool, if it's true, all previous logs will be clear.
 */

(function() {
    'use strict';

    function clog() {
        var eleName;
        var element = arguments[0];
        var isClear = arguments[2];

        if (isClear) {
            console.clear();
        }

        if (Array.isArray(element)) {
            eleName = arguments[1] || 'Array';
            if (typeof element[0] === 'object') {
                console.group(eleName);
                console.table(element);
                console.groupEnd();
            } else {
                console.group(eleName);
                console.log(element);
                console.dir(element);
                console.groupEnd();
            }
            return;
        }

        if (element.nodeType) {
            eleName = arguments[1] || 'Element';
            console.group(eleName);
            console.log("%o, %O", element, element);
            console.groupEnd();
            return;
        }

        if (element instanceof Date && !isNaN(element.valueOf())) {
            eleName = arguments[1] || 'Date';
            console.group(eleName);
            console.log(element);
            console.log('Locale time:', element.toLocaleString());
            console.groupEnd();
            return;
        }

        if (typeof element === 'number') {
            eleName = arguments[1] || 'Number';
        }

        if (typeof element === 'string') {
            eleName = arguments[1] || 'String';
        }

        console.group(eleName);
        console.log(element);
        console.groupEnd();
    }

    window.clog = clog;
})();
