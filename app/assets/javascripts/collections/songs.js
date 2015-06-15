SilentIsland.Collections.Songs = Backbone.Collection.extend({
  url: '/api/songs',

  model: SilentIsland.Models.Song,

  parse: function (payload) {
    this.page_number = parseInt(payload.page_number)
    this.total_pages = parseInt(payload.total_pages)
    return payload.models
  },

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
