SilentIsland.Views.PlayQueueItem = Backbone.View.extend({
  template: JST['songs/play_queue_item'],

  className: 'song-info play-queue-item panel',

  attributes: function () {
    return { 'data-id': this.model.id }
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    return this;
  }
})
