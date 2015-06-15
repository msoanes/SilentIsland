SilentIsland.Collections.Tags = Backbone.Collection.extend({
  url: '/api/tags',

  model: SilentIsland.Models.Tag,

  parse: function (payload) {
    this.page_number = parseInt(payload.page_number)
    this.total_pages = parseInt(payload.total_pages)
    return payload.models
  },

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
