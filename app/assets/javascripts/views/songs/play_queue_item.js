SilentIsland.Views.PlayQueueItem = Backbone.View.extend({
  template: JST['songs/play_queue_item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    return this;
  }
})
