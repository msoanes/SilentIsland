SilentIsland.Collections.Stream = Backbone.Collection.extend({
  url: '/api/songs/stream',

  model: SilentIsland.Models.Song,

  parse: function (payload) {
    this.page_number = parseInt(payload.page_number)
    this.total_pages = parseInt(payload.total_pages)
    return payload.models
  },

  parse: function (response) {
    var collection = this;
    _.each(response, function (songData) {
      var song = SilentIsland.router.songs.get(songData.id);
      if (!song) {
        song = new SilentIsland.Models.Song(songData);
        SilentIsland.router.songs.add(song);
      }
      collection.add(song);
    });
    return [];
  }
});
