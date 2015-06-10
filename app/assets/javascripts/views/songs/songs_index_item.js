SilentIsland.Views.SongsIndexItem = Backbone.View.extend({
  template: JST['songs/index_item'],

  initialize: function (options) {
    this.model = options.model;
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    return this;
  }
});
