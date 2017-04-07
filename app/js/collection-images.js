define(["text!template-mini.html", "BigImage"], function (template, BigImage) {
    var CollectionView = function ($container) {
        var self = this;
        var collectionStr = "";
        self.template = _.template(template);
        this.render = function () {
            _.each(Storage.collection, function (image) {
                collectionStr += self.template({img: image.value, id: image.name});
            });
            $container.html(collectionStr);
        };

        /*
        *Events
         */
        $("#collection-image").on("click", ".image-mini", function () {
            // new BigImage($("#big-image"), _.where(Storage.collection, {name: this.id})[0], this.id.slice(5)).render();
        })
    };
    return CollectionView
});
