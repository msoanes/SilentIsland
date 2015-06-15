SilentIsland.Mixins.SongIndexable = {
  parse: function (payload) {
    this.parseSubscription(payload);
    if (payload.songs) {
      this._addSongs(payload.songs);
      delete payload.songs;
    }
    return payload;
  },

  songs: function () {
    if (!this._songs) {
      this._songs = new SilentIsland.Collections.Songs();
      this._songs.url = '/api/tags/' + this.get('id');
      this._songs.parse = function (response) {
        return SilentIsland.Mixins.PageableParse.call(this, response.songs);
      };
    }
    return this._songs;
  },

  _addSongs: function (songs) {
    var model = this;
    model.songs().page_number = songs.page;
    model.songs().total_pages = songs.total_pages;
    _.each(songs.models, function (songData) {
      var songModel = SilentIsland.router.songs.get(songData.id);
      if (!songModel) {
        songModel = new SilentIsland.Models.Song(songData);
        SilentIsland.router.songs.add(songModel);
      }
      model.songs().add(songModel);
    });
  }
}
