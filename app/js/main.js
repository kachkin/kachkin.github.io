"use strict";
require.config({
    baseUrl: "app",
    paths: {
        jquery: "https://code.jquery.com/jquery-3.2.1",
        Slider: "js/slider",
        underscore : "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore",
        text: "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text",
        json: "https://cdnjs.cloudflare.com/ajax/libs/requirejs-plugins/1.0.3/json",
        Collection: "js/collection-images",
        BigImage: "js/big-image-view"

    }
});
requirejs(["Slider", "underscore","jquery"], function (Slider, _, $) {
    new Slider($("#content")).render();
});