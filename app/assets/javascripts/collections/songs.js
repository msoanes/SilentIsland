SilentIsland.Collections.Songs = Backbone.Collection.extend({
  url: '/api/songs',

  model: SilentIsland.Models.Song,

  getOrFetch: function (id, callback) {
    var collection = this;
    var model = collection.get(id);
    if (!model) {
      model = new SilentIsland.Models.Song({ id: id });
    }
    model.fetch({
      success: function () {
        collection.add(model);
        callback && callback();
      }
    });
    return model;
  }
});
