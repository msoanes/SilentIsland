SilentIsland.Views.UserDetail = Backbone.CompositeView.extend({
  template: JST['users/detail'],

  initialize: function (options) {
    var indexView = new SilentIsland.Views.SongsIndex({
      collection: this.model.songs()
    });

    this.listenTo(this.model, 'sync', this.render);

    this.addSubview('.songs-index', indexView);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
    this.attachSubviews();
    return this;
  },
});
