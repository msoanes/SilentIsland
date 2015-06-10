SilentIsland.Views.SongsIndex = Backbone.CompositeView.extend({
  template: JST['songs/index'],

  initialize: function (options) {
    this.title = options.title;
    this.addSongs();
    this.listenTo(this.collection, 'add', this.addSong);
  },

  render: function () {
    this.$el.html(this.template({ title: this.title }));
    this.attachSubviews();
    return this;
  },

  addSongs: function () {
    var indexView = this;
    indexView.collection.each(function (song) {
      indexView.addSong(song);
    });
  },

  addSong: function (song) {
    var songsIndexItem = new SilentIsland.Views.SongsIndexItem({
      model: song
    });
    this.addSubview('.songs-list', songsIndexItem);
  }
});
