SilentIsland.Views.PlayQueueItem = Backbone.View.extend({
  template: JST['songs/play_queue_item'],

  className: 'song-info play-queue-item panel',

  events: {
    'click .play-button': 'playSong',
    'click .unqueue-song': 'unqueueSong'
  },

  attributes: function () {
    return { 'data-id': this.model.id }
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'play', this.addPlayingClass)
    this.listenTo(this.model, 'stop', this.removePlayingClass)
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    if (this.model === SilentIsland.player.currentSong) {
      this.$el.addClass('active');
    }
    return this;
  },

  addPlayingClass: function () {
    this.$el.addClass('active');
  },

  removePlayingClass: function () {
    this.$el.removeClass('active');
  },

  playSong: function () {
    this.model.trigger('play', this.model);
  },

  unqueueSong: function () {
    this.model.trigger('unqueue', this.model);
  }
})
