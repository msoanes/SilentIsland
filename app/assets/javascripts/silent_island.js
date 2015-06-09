window.SilentIsland = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new SilentIsland.Routers.Router({
      posts: new SilentIsland.Collections.Songs(),
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SilentIsland.initialize();
});
