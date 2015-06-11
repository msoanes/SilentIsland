window.SilentIsland = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var navbar = new SilentIsland.Views.Navbar();
    $('#nav').html(navbar.render().$el);
    this.router = new SilentIsland.Routers.Router({
      tags: new SilentIsland.Collections.Tags(),
      songs: new SilentIsland.Collections.Songs(),
      users: new SilentIsland.Collections.Users(),
      $rootEl: $('#left-content')
    });

    this.player = new SilentIsland.Views.AudioPlayer({
      collection: this.router.songs
    });
    $('#right-content').html(this.player.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SilentIsland.initialize();
});
