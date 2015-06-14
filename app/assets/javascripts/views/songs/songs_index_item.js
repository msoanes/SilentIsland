SilentIsland.Views.SongsIndexItem = Backbone.View.extend({
  template: JST['songs/index_item'],

  className: 'songs-list-item',

  events: {
    'click .play-button': 'playSong',
    'click .song-title': 'visitSong',
    'click .tag': 'visitTag',
    'click .song-uploader': 'visitUploader',
    'click .queue': 'queueSong',
    'click .edit': 'editSong'
  },

  initialize: function (options) {
    this.model = options.model;
    this.listenTo(this.model, 'stop', this.removePlayingClass);
    this.listenTo(this.model, 'play', this.addPlayingClass);
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    if (this.model === SilentIsland.player.currentSong) {
      this.$el.addClass('active');
    }
    return this;
  },

  visitSong: function () {
    Backbone.history.navigate('/songs/' + this.model.get('id'),
      { trigger: true }
    );
  },

  playSong: function () {
    this.model.trigger('play', this.model);
  },

  addPlayingClass: function () {
    this.$el.addClass('active');
  },

  removePlayingClass: function () {
    this.$el.removeClass('active');
  },

  visitTag: function (event) {
    var tagID = $(event.currentTarget).data('id');
    Backbone.history.navigate('/tags/' + tagID, { trigger: true });
  },

  editSong: function () {
    Backbone.history.navigate('/songs/' + this.model.get('id') + '/edit',
      { trigger: true }
    );
  },

  visitUploader: function (event) {
    var userID = $(event.currentTarget).data('id');
    Backbone.history.navigate('/users/' + userID, { trigger: true });
  },

  queueSong: function () {
    this.model.trigger('queue', this.model);
  }
});
