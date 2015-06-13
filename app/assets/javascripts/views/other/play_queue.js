SilentIsland.Views.PlayQueue = Backbone.CompositeView.extend({
  template: JST['other/play_queue'],

  className: 'play-queue',

  events: {
    'sortdeactivate .play-queue-list': 'updateOrder',
    'click .next': 'playNext',
    'click .prev': 'playPrev',
    'click .loop': 'toggleLoop'
  },

  initialize: function (options) {
    this.setCollectionOrder();
    this.setCollectionComparator();
    this.mainCollection = options.mainCollection;
    this.addSongs();
    this.listenTo(this.collection, 'add', this.addSong);
    this.listenTo(this.collection, 'unqueue', this.unqueueSong);
    this.listenTo(this.mainCollection, 'ended', this.playNext);
    this.listenTo(this.mainCollection, 'queue', this.queueSong);
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
    song.ord = this.collection.length - 1;
    var playQueueItem = new SilentIsland.Views.PlayQueueItem({
      model: song
    });
    this.addSubview('.play-queue-list', playQueueItem);
    this.$('.play-queue-list').sortable({
      start: function (e, ui) {
        ui.placeholder.height('50px');
      },
      axis: 'y'
    });
  },

  playNext: function () {
    var nextIndex = 0;
    var currSong = SilentIsland.player.currentSong;
    if (this.collection.contains(currSong)) {
      nextIndex = (this.collection.indexOf(currSong) + 1);
    }
    if ((this.collection.length - 1) < nextIndex && !this.looping) { return; }
    nextIndex = nextIndex % this.collection.length;
    var nextSong = this.collection.at(nextIndex);
    nextSong.trigger('play', nextSong);
  },

  playPrev: function () {
    var prevIndex = 0;
    var currSong = SilentIsland.player.currentSong;
    if (this.collection.contains(currSong)) {
      prevIndex = this.collection.indexOf(currSong) - 1;
    }
    if (prevIndex < 0 && !this.looping) { return; }
    var prevSong = this.collection.at(prevIndex);
    prevSong.trigger('play', prevSong);
  },

  toggleLoop: function (event) {
    $target = $(event.currentTarget);
    this.looping = !this.looping;
    $target.removeClass('active');
    if (this.looping) {
      $target.addClass('active');
    }
  },

  setCollectionOrder: function () {
    this.collection.each(function (song, idx) {
      song.ord = idx;
    });
  },

  setCollectionComparator: function () {
    this.collection.comparator = function (song) {
      return song.ord;
    };
  },

  updateOrder: function () {
    var playQueue = this;
    playQueue.$('.play-queue-item').each(function (idx, el) {
      playQueue.collection.get($(el).data('id')).ord = idx;
    });
    playQueue.collection.sort();
  },

  queueSong: function (song) {
    this.collection.add(song);
  },

  unqueueSong: function (song) {
    this.collection.remove(song);
    this.removeModelSubview('.play-queue-list', song);
  }
});
