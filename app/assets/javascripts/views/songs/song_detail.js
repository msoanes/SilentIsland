SilentIsland.Views.SongDetail = Backbone.CompositeView.extend({
  template: JST['songs/detail'],

  events: {
    'click .uploader': 'visitUploader'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    var tagView = new SilentIsland.Views.TagList({
      collection: this.model.get('tags') || []
    });
    this.addSubview('.tags', tagView);
  },

  render: function () {
    this.$el.html(this.template({ song: this.model }));
    this.attachSubviews();
    var tagView = this.subviews('.tags').toArray()[0]
    tagView.collection = this.model.get('tags') || [];
    tagView.render();
    return this;
  },

  visitUploader: function (event) {
    var userID = $(event.currentTarget).data('id');
    Backbone.history.navigate('/users/' + userID, { trigger: true });
  }
})
