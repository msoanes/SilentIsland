SilentIsland.Views.SongDetail = Backbone.CompositeView.extend({
  template: JST['songs/detail'],

  events: {
    'click .play-button': 'playSong',
    'click .uploader': 'visitUploader',
    'click .queue': 'queueSong',
    'click .edit': 'editSong'
  },

  initialize: function () {
    this.listenTo(this.model, 'stop', this.removePlayingClass);
    this.listenTo(this.model, 'play', this.addPlayingClass);
    this.listenTo(this.model, 'sync', this.render);
    var tagView = new SilentIsland.Views.TagList({
      collection: this.model.get('tags') || [],
      listAll: true
    });
    this.addSubview('.tags', tagView);
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    this.attachSubviews();
    if (this.model === SilentIsland.player.currentSong) {
      this.$el.addClass('active')
    }
    if (SilentIsland.player.currentSong.get('id') === undefined) {
      this.model.trigger('play', this.model);
    }
    var tagView = this.subviews('.tags').toArray()[0]
    tagView.collection = this.model.get('tags') || [];
    tagView.render();
    return this;
  },

  visitUploader: function (event) {
    var userID = $(event.currentTarget).data('id');
    Backbone.history.navigate('/users/' + userID, { trigger: true });
  },

  queueSong: function () {
    this.model.trigger('queue', this.model);
  },

  editSong: function () {
    Backbone.history.navigate('/songs/' + this.model.get('id') + '/edit',
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

  onRender: function () {
    this.$('abbr').timeago();
  }
})
