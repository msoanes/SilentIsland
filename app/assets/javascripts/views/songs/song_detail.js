SilentIsland.Views.SongDetail = Backbone.View.extend({
  template: JST['songs/detail'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    console.log(this.model);
    return this;
  }
})
