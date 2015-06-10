SilentIsland.Views.SongsIndexItem = Backbone.View.extend({
  template: JST['songs/index_item'],

  className: 'songs-list-item',

  events: { 'click .song-title': 'visitSong' },

  initialize: function (options) {
    this.model = options.model;
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    return this;
  },

  visitSong: function () {
    Backbone.history.navigate('/songs/' + this.model.get('id'),
      { trigger: true }
    );
  }
});
