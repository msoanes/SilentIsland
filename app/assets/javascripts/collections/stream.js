SilentIsland.Collections.Stream = Backbone.Collection.extend({
  url: '/api/songs/stream',

  model: SilentIsland.Models.Song,

  parse: function (response) {
    response = SilentIsland.Mixins.PageableParse(response);
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
