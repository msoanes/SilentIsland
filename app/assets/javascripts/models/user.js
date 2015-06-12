SilentIsland.Models.User = Backbone.Model.extend(
  _.extend({}, SilentIsland.Mixins.Subscribable, {
    urlRoot: '/api/users',

    subscribableOptions: {
      foreignKey: "subscribable_id",
      subscribableType: 'User'
    },

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
      }
      return this._songs;
    },

    _addSongs: function (songs) {
      var user = this;
      _.each(songs, function (songData) {
        var songModel = SilentIsland.router.songs.get(songData.id); // Law of Demeter, fix this somehow
        if (!songModel) {
          songModel = new SilentIsland.Models.Song(songData);
          SilentIsland.router.songs.add(songModel);
        }
        user.songs().add(songModel);
      });
    }
  })
);
