SilentIsland.Views.TagDetail = Backbone.CompositeView.extend({
  template: JST['tags/detail'],

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
    this.$el.html(this.template({ tag: this.model }));
    this.attachSubviews();
    return this;
  },
});
