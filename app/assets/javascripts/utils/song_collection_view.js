SilentIsland.Mixins.SongCollectionView = {
  initialize: function (options) {
    var indexView = new SilentIsland.Views.SongsIndex({
      collection: this.model.songs()
    });
    var subscribeButton = new SilentIsland.Views.SubscribeButton({
      model: this.model
    })
    this.addSubview('.songs-index', indexView);
    this.addSubview('.subscribe-button', subscribeButton);

    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ model: this.model }));
    this.attachSubviews();
    return this;
  }
}
