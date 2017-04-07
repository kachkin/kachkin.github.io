define(["text!big-image.html"], function (template) {
    var BigImageView = function ($container, image, id) {
        var a = id;
        var self = this;
        var imageStr = "";
        self.template = _.template(template);
        this.render = function () {
            imageStr = self.template({img: image.value, id:id||1, text:image.text});
            $container.html(imageStr);
            $(".image-big").delay(1000).fadeOut(2500);
        };
    };
    return BigImageView
});
