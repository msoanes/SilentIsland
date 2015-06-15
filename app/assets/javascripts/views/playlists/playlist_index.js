SilentIsland.Views.PlaylistsIndex = Backbone.CompositeView.extend(
  _.extend({}, SilentIsland.Mixins.Scrollable, {
  template: JST['playlists/index'],

  scrollParams: {
    view: 'PlaylistsIndexItem',
    listSelector: '.playlists-list'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.addItems);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    this.listenForScroll();
    return this;
  }
}));
