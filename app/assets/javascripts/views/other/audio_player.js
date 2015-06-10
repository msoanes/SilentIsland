SilentIsland.Views.AudioPlayer = Backbone.View.extend({
  template: JST['other/audio_player'],

  events: {
    'click .play-pause': 'togglePlay',
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
