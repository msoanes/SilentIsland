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

  render: function () {
    this.$el.html(this.template());
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
    alert('Not yet implemented');
  }
});
