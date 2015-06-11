SilentIsland.Models.Tag = Backbone.Model.extend({
  urlRoot: '/api/tags',

  parse: function (payload) {
    if (payload.songs) {
      this._addSongs(payload.songs);
      delete payload.songs;
    }
    return payload;
  },

  songs: function () {
    if (!this._songs) {
      this._songs = new SilentIsland.Collections.Songs();
    }
    return this._songs;
  },

  _addSongs: function (songs) {
    var tag = this;
    _.each(songs, function (songData) {
      var songModel = SilentIsland.router.songs.get(songData.id); // Law of Demeter, fix this somehow
      if (!songModel) {
        songModel = new SilentIsland.Models.Song(songData);
        SilentIsland.router.songs.add(songModel);
      }
      tag.songs().add(songModel);
    });
  }
});
