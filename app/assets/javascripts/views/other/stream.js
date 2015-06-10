SilentIsland.Views.Stream = Backbone.CompositeView.extend({
  template: JST['other/stream'],

  initialize: function (options) {
    var indexView = new SilentIsland.Views.SongsIndex({
      collection: this.collection
    });

    this.addSubview('.songs-index', indexView);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
});
