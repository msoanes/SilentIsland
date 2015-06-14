SilentIsland.Views.TagList = Backbone.View.extend({
  template: JST['tags/list'],

  events: {
    'click .tag': 'visitTag'
  },

  render: function () {
    this.$el.html(this.template({ tags: this.collection }));
    return this;
  },

  visitTag: function (event) {
    var tagID = $(event.currentTarget).data('id');
    Backbone.history.navigate('/tags/' + tagID, { trigger: true });
  }
});
