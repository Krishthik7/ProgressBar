/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
"use strict";

var MODULE = (function(my) {
    var _this = my;

    my.generateTitle = function() {
        var title = document.createElement("h3");
        title.innerHTML = _this.app_title;
        title.setAttribute("class", "w3-row w3-mobile title");
        _this.container.appendChild(title);
    }

    return my;
})(MODULE || {});