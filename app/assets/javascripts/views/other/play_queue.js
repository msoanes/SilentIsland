SilentIsland.Views.PlayQueue = Backbone.CompositeView.extend({
  template: JST['other/play_queue'],

  className: 'panel',

  initialize: function (options) {
    this.mainCollection = options.mainCollection;
    this.addSongs();
    this.listenTo(this.collection, 'add', this.addSong);
    this.listenTo(this.mainCollection, 'ended', this.playNext);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  addSongs: function () {
    var playQueue = this;
    playQueue.collection.each(function (song) {
      playQueue.addSong(song);
    });
  },

  addSong: function (song) {
    var playQueueItem = new SilentIsland.Views.PlayQueueItem({
      model: song
    });
    this.addSubview('.play-queue-list', playQueueItem);
  },

  playNext: function (prevSong) {
    if (this.collection.contains(prevSong)) {
      var nextIndex = this.collection.indexOf(prevSong) + 1;
    } else {
      var nextIndex = 0;
    }
    if (this.collection.length - 1 < nextIndex) { return; }
    var nextSong = this.collection.at(nextIndex);
    nextSong.trigger('play', nextSong);
  }
});
