SilentIsland.Views.TagDetail = Backbone.CompositeView.extend({
  template: JST['tags/detail'],

  initialize: function (options) {
    var indexView = new SilentIsland.Views.SongsIndex({
      collection: this.model.songs()
    });

    this.listenTo(this.model, 'sync', this.render);

    this.addSubview('.songs-index', indexView);
  },

  render: function () {
    this.$el.html(this.template({ tag: this.model }));
    this.attachSubviews();
    return this;
  },
});
