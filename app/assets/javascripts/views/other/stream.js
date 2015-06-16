SilentIsland.Views.Stream = Backbone.CompositeView.extend({
  template: JST['other/stream'],

  initialize: function (options) {
    this.collection.fetch({ reset: true })
    this.listenTo(this.collection, 'reset', this.checkCollectionEmptiness)
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  checkCollectionEmptiness: function () {
    if (this.collection.isEmpty()) {
      this.collection = SilentIsland.router.songs;
    }
    var indexView = new SilentIsland.Views.SongsIndex({
      collection: this.collection
    });
    this.collection.fetch();
    this.addSubview('.songs-index', indexView);
    this.onRender();
  }
});
