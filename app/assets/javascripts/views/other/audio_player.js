SilentIsland.Views.AudioPlayer = Backbone.View.extend({
  template: JST['other/audio_player'],

  initialize: function () {
    this.listenTo(this.collection, 'play', this.switchSong);
  },

  events: {
    'click .play-pause': 'togglePlay',
  },

  render: function () {
    this.$el.html(this.template({
      currentSong: this.currentSong
    }));
    return this;
  },

  switchSong: function (model) {
    console.log("Changed Song");
    console.log(model);
    this.currentSong = model;
    this.render();
  }
});
