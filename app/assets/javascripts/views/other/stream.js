SilentIsland.Views.Stream = Backbone.CompositeView.extend({
  template: JST['other/stream'],

  initialize: function (options) {
    var indexView = new SilentIsland.Views.SongsIndex({
      collection: this.collection
    });

    this.addSubview('.songs-index', indexView);
    this.collection.fetch({
      success: this.checkCollectionEmptiness.bind(this)
    });
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  checkCollectionEmptiness: function () {
    // if (this.collection.isEmpty()) {
    //   var oldIndexView = this.subviews('.songs-index')[0]
    //   this.removeSubviews('.songs-index', subview);
    //   var tagBrowseView = new SilentIsland.Views.TagsIndex();
    //
    // }
  }
});
