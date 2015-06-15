SilentIsland.Collections.Tags = Backbone.Collection.extend({
  url: '/api/tags',

  model: SilentIsland.Models.Tag,

  parse: SilentIsland.Mixins.PageableParse,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);
    if (!model) {
      model = new SilentIsland.Models.Tag({ id: id });
    }
    model.fetch({
      success: function () {
        collection.add(model);
      }
    });
    return model;
  }
});
