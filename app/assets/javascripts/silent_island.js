window.SilentIsland = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var navbar = new SilentIsland.Views.Navbar();
    $('#nav').html(navbar.render().$el);
    this.router = new SilentIsland.Routers.Router({
      songs: new SilentIsland.Collections.Songs(),
      $rootEl: $('#left-content')
    });

    this.player = new SilentIsland.Views.AudioPlayer();
    $('#right-content').html(this.player.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SilentIsland.initialize();
});
