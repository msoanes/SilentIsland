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
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SilentIsland.initialize();
});
