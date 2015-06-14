SilentIsland.Views.Navbar = Backbone.CompositeView.extend({
  template: JST['other/navbar'],

  className: 'nav-bar',

  events: {
    'click .logo': 'stream',
    'click .stream-link': 'stream',
    'click .explore-link': 'explore',
    'click .upload-link': 'upload',
    'click .sign-out-link': 'signOut'
  },

  initialize: function () {
    var searchBar = new SilentIsland.Views.SearchBar();
    this.addSubview('.search-bar', searchBar);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  stream: function () {
    Backbone.history.navigate('', { trigger: true });
  },

  upload: function () {
    Backbone.history.navigate('songs/new', { trigger: true });
  },

  signOut: function () {
    $('#hidden-signout').submit();
  },

  explore: function () {
    Backbone.history.navigate('explore', { trigger: true });
  }
});
