SilentIsland.Views.UserDetail = Backbone.CompositeView.extend({
  template: JST['users/detail'],

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
    this.$el.html(this.template({ user: this.model }));
    this.attachSubviews();
    return this;
  },
});
