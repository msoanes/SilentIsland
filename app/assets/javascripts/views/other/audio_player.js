SilentIsland.Views.AudioPlayer = Backbone.View.extend({
  template: JST['other/audio_player'],

  initialize: function () {
    this.currentSong = new SilentIsland.Models.Song();
    this.listenTo(this.collection, 'play', this.switchSong);
    setInterval(this.updateCurrentTime.bind(this), 500);
  },

  events: {
    'click .play-button-main': 'togglePlay',
    'mousedown input.seeker': 'startSeek',
    'mouseup input.seeker': 'endSeek',
    'input input.seeker': 'seek',
  },

  render: function () {
    this.$el.html(this.template({
      currentSong: this.currentSong
    }));
    this.$('audio').on('loadedmetadata', this.setInfo.bind(this))
    this.$('audio').attr('src', this.currentSong.get('url'));
    return this;
  },

  switchSong: function (model) {
    if (model !== this.currentSong) {
      this.currentSong = model;
      this.render();
    } else {
      this.togglePlay();
    }
  },

  togglePlay: function () {
    var audio = this.$('audio')[0];
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  },

  setInfo: function () {
    var duration = Math.floor(this.$('audio')[0].duration);
    var renderedDuration = this.renderTime(duration);
    this.$('input.seeker').attr('max', duration);
    this.$('.time-total').text(renderedDuration);
  },

  updateCurrentTime: function () {
    var currentTime = this.$('audio')[0].currentTime;
    var renderedCurrentTime = this.renderTime(currentTime);
    this.$('input.seeker:not(.seeking)').val(currentTime);
    this.$('.time-elapsed').text(renderedCurrentTime);
  },

  renderTime: function (time) {
    var totalSeconds = Math.floor(time);
    var seconds = totalSeconds % 60;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    var minutes = Math.floor(totalSeconds / 60);
    return '' + minutes + ':' + seconds
  },

  seek: function (event) {
    var $input = $(event.currentTarget);
    this.$('audio')[0].currentTime = $input.val();
    this.updateCurrentTime();
  },

  startSeek: function () {
    this.$('input.seeker').addClass('seeking');
  },

  endSeek: function () {
    this.$('input.seeker').removeClass('seeking');
  }
});
