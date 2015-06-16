SilentIsland.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.songs = new SilentIsland.Collections.Songs();
    this.tags = new SilentIsland.Collections.Tags();
    this.users = new SilentIsland.Collections.Users();
    this.listens = new SilentIsland.Collections.Listens();
    this.streamCollection = new SilentIsland.Collections.Stream();
  },

  routes: {
    '': 'stream',
    'explore': 'explore',
    'history': 'history',
    'songs/new': 'songNew',
    'songs/:id/edit': 'songEdit',
    'playlists': 'playlistsIndex',
    'tags/:id': 'tagDetail',
    'users/:id': 'userDetail',
    'songs/:id': 'songDetail',
  },

  stream: function () {
    var view = new SilentIsland.Views.Stream({ collection: this.streamCollection });
    this._swapView(view);
  },

  explore: function () {
    this.songs.fetch();
    var view = new SilentIsland.Views.Explore({ collection: this.songs });
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

  songEdit: function (id) {
    var router = this;
    var song = router.songs.getOrFetch(id, function () {
      if (song.get('uploader').id !== SilentIsland.currentUser.get('id')) {
        Backbone.history.navigate('/', { trigger: true });
        return;
      }
      var view = new SilentIsland.Views.SongForm({
        model: song,
        collection: router.songs,
        title: 'Edit Song'
      });
      router._swapView(view);
    });
  },

  playlistsIndex: function () {
    var playlists = new SilentIsland.Collections.Playlists();
    playlists.fetch();
    var view = new SilentIsland.Views.PlaylistsIndex({
      collection: playlists
    });

    this._swapView(view);
  },

  history: function () {
    this.listens.fetch({ reset: true });
    var view = new SilentIsland.Views.ListensIndex({ collection: this.listens });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.$el);
    this._currentView = view.render();
  }
});
