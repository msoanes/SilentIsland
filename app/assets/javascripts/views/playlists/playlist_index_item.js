SilentIsland.Views.PlaylistsIndexItem = Backbone.View.extend({
  template: JST['playlists/index_item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({
      playlist: this.model
    }));
    return this;
  }
})
