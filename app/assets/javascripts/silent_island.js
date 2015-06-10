window.SilentIsland = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new SilentIsland.Routers.Router({
      songs: new SilentIsland.Collections.Songs(),
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SilentIsland.initialize();
});
