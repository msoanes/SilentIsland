SilentIsland.Views.ListensIndexItem = Backbone.CompositeView.extend({
  template: JST['listens/index_item'],

  initialize: function () {
    var songItemView = new SilentIsland.Views.SongsIndexItem({
      model: this.model.song()
    });

    this.addSubview('.listen-song-item', songItemView);
  },

  render: function () {
    this.$el.html(this.template({
      listen: this.model
    }));
    this.attachSubviews();
    $('abbr.timeago').timeago();
    return this;
  }
})
