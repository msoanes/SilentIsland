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

    this.playQueue = new SilentIsland.Views.PlayQueue({
      collection: new SilentIsland.Collections.Songs(),
      mainCollection: this.router.songs
    });

    this.currentUser = this.router.users.getOrFetch(CURRENT_USER_ID);
    this.currentUser.fetch();

    setInterval(function () {
      $('abbr.timeago').timeago();
    }, 100);

    $('#right-content').append(this.player.render().$el);
    $('#right-content').append(this.playQueue.render().$el);

    Backbone.history.start();
  }
};

$(document).ready(function(){
  SilentIsland.initialize();
});
