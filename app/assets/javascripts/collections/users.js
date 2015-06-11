SilentIsland.Collections.Users = Backbone.Collection.extend({
  url: '/api/users',

  model: SilentIsland.Models.User,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);
    if (!model) {
      model = new SilentIsland.Models.User({ id: id });
    }
    model.fetch({
      success: function () {
        collection.add(model);
      }
    });
    return model;
  }
});
