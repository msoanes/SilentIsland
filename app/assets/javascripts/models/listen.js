SilentIsland.Models.Listen = Backbone.Model.extend({
  urlRoot: '/api/listens',

  parse: function (payload) {
    console.log(payload);
    if (payload.song) {
      this._addSong(payload.song);
      delete payload.song;
    }
    return payload
  },

  _addSong: function (songData) {
    var songModel = SilentIsland.router.songs.get(songData.id);
    if (!songModel) {
      songModel = new SilentIsland.Models.Song(songData);
      SilentIsland.router.songs.add(songModel);
    }
    this._song = songModel;
  },

  song: function () {
    return this._song;
  }
});
