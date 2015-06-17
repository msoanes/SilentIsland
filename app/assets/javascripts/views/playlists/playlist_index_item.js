SilentIsland.Views.PlaylistsIndexItem = SilentIslandBaseView.extend({
  template: JST['playlists/index_item'],

  className: 'panel playlist-index-item',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({
      playlist: this.model
    }));
    return this;
  }
});
