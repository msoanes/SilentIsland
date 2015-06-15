SilentIsland.Models.Playlist = Backbone.Model.extend(
  _.extend({}, SilentIsland.Mixins.SongIndexable, {
    urlRoot: '/api/playlists',

    indexableOptions: {
      routeName: 'playlists'
    }
  })
);
