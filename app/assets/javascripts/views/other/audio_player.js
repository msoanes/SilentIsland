SilentIsland.Views.AudioPlayer = Backbone.CompositeView.extend({
  template: JST['other/audio_player'],

  initialize: function () {
    this.currentSong = new SilentIsland.Models.Song();
    this.listenTo(this.collection, 'play', this.switchSong);
    var seeker = new SilentIsland.Views.Seeker();
    this.addSubview('.song-controls', seeker);
  },

  events: {
    'click .play-button-main': 'togglePlay',
    'input input.volume': 'setVolume'
  },

  render: function () {
    this.$el.html(this.template({
      currentSong: this.currentSong
    }));
    this.$audio = this.$('audio');
    this.$audio.attr('src', this.currentSong.get('url'));
    _.bindAll(this, 'setInfo', 'updateCurrentTime', 'endPlay');

    this.$audio.on('loadedmetadata', this.setInfo);
    this.$audio.on('timeupdate', this.updateCurrentTime);
    this.$audio.on('ended', this.endPlay);
    this.attachSubviews();
    this.subviews('.song-controls').toArray()[0].$audio = this.$audio;
    return this;
  },

  switchSong: function (newSong) {
    if (newSong !== this.currentSong) {
      // This is bad: go back to regular template rendering now you know what the problem is
      // On the other hand, preserves volume levels etc. easily.
      this.currentSong.trigger('stop', this.currentSong);
      this.currentSong = newSong;
      this.$audio.attr('src', this.currentSong.get('url'));
      this.$('.song-title').text(this.currentSong.escape('title'));
      this.$('.song-uploader').text(_.escape(this.currentSong.get('uploader').username));
      this.$('.song-uploader').data('id', this.currentSong.get('uploader').id);
    } else {
      this.togglePlay();
    }
  },

  togglePlay: function () {
    var audio = this.$audio[0];
    if (audio.paused) {
      audio.play();
      this.setPauseGlyphicon();
    } else {
      audio.pause();
      this.setPlayGlyphicon();
    }
  },

  setInfo: function () {
    var duration = Math.floor(this.$audio[0].duration);
    var renderedDuration = this.renderTime(duration);
    this.subviews('.song-controls').toArray()[0].setDuration(duration);
    this.$('.time-total').text(renderedDuration);
    this.togglePlay();
  },

  updateCurrentTime: function () {
    var currentTime = this.$audio[0].currentTime;
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
    return '' + minutes + ':' + seconds;
  },

  setVolume: function (event) {
    this.$audio[0].volume = Math.log($(event.currentTarget).val());
  },

  endPlay: function () {
    this.currentSong.trigger('ended', this.currentSong);
  },

  changeClass: function (oldClass, newClass) {
    var $playSymbol = this.$('.play-symbol');
    $playSymbol.addClass('transparent');
    $playSymbol.on('transitionend', function () {
      $playSymbol.removeClass(oldClass);
      $playSymbol.addClass(newClass);
      $playSymbol.removeClass('transparent');
    })
  },

  setPauseGlyphicon: function () {
    this.changeClass('glyphicon-play', 'glyphicon-pause');
  },

  setPlayGlyphicon: function () {
    this.changeClass('glyphicon-pause', 'glyphicon-play');
  }
});
