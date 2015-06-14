SilentIsland.Views.SongDetail = Backbone.CompositeView.extend({
  template: JST['songs/detail'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    if (this.model.get('tags')) {
      var tagView = new SilentIsland.Views.TagList({
        collection: this.model.get('tags')
      });
      this.addSubview('.tags', tagView);
    }
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    this.attachSubviews();
    return this;
  }
})
