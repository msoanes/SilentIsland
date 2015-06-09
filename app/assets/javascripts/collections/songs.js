SilentIsland.Collections.Songs = Backbone.Collection.extend({
  url: '/api/songs',

  model: SilentIsland.Models.Song
});
