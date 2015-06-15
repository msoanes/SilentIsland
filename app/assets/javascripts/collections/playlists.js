SilentIsland.Collections.Playlists = Backbone.Collection.extend({
  url: '/api/playlists',

  model: SilentIsland.Models.Playlist,

  parse: SilentIsland.Mixins.PageableParse,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);
    if (!model) {
      model = new SilentIsland.Models.Playlist({ id: id });
    }
    model.fetch({
      success: function () {
        collection.add(model);
      }
    });
    return model;
  }
});
