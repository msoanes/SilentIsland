SilentIsland.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.songs = options.songs;
    this.tags = options.tags;
    this.users = options.users;
    this.streamCollection = new SilentIsland.Collections.Stream();
  },

  routes: {
    '': 'stream',
    'songs/new': 'songNew',
    'tags/:id': 'tagDetail',
    'users/:id': 'userDetail',
    'songs/:id': 'songDetail'
  },

  stream: function () {
    this.streamCollection.fetch();
    var view = new SilentIsland.Views.Stream({ collection: this.streamCollection });
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

  userDetail: function (id) {
    var user = this.users.getOrFetch(id);
    var view = new SilentIsland.Views.UserDetail({ model: user });
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
