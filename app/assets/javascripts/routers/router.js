SilentIsland.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.songs = options.songs;
    this.tags = options.tags;
  },

  routes: {
    '': 'stream',
    'songs/new': 'songNew',
    'tags/:id': 'tagDetail',
    'songs/:id': 'songDetail'
  },

  stream: function () {
    this.songs.fetch();
    var view = new SilentIsland.Views.Stream({ collection: this.songs });
    this._swapView(view);
  },

  tagDetail: function (id) {
    var tag = this.tags.getOrFetch(id);
    var view = new SilentIsland.Views.TagDetail({ model: tag });
    this._swapView(view);
  },

  songDetail: function (id) {
    var song = this.songs.getOrFetch(id);
    var view = new SilentIsland.Views.SongDetail({ model: song });
    this._swapView(view);
  },

  songNew: function () {
    var song = new SilentIsland.Models.Song();
    var view = new SilentIsland.Views.SongForm({
      model: song,
      collection: this.songs,
      title: 'New Song'
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
