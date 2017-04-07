define(["text!template.html", "json!image.json", "Collection", "BigImage"], function (template, images, Collection, BigImage) {
    var Slider = function ($container) {
        Storage.collection=images;
        var self = this;
        var pageStr = "";
        self.template = _.template(template);
        this.render = function () {
            console.log(images);
            pageStr = self.template();
            $container.html(pageStr);
            new BigImage($("#big-image"), images[0]).render();
            new Collection($("#collection-image")).render();
        };
    };
    var timerId = slide();
    $("#big-image").ready(function () {
        $("#collection-image").on("click", ".image-mini", function () {
            new BigImage($("#big-image"), _.where(Storage.collection, {name: this.id})[0], this.id.slice(5)).render();
            timerId = slide()
        });
    });

    function slide() {
        clearInterval(timerId);
        return (setInterval(function () {
            if($("#big-image")[0].firstChild.id==Storage.collection.length){
                new BigImage($("#big-image"), Storage.collection[0]).render();
            }else {
                new BigImage($("#big-image"), Storage.collection[parseInt($("#big-image")[0].firstChild.id)], parseInt($("#big-image")[0].firstChild.id) + 1).render();
            }
        }, 3000));
    }
    return Slider
});