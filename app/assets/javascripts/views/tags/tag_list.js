SilentIsland.Views.TagList = SilentIslandBaseView.extend({
  template: JST['tags/list'],

  events: {
    'click .tag': 'visitTag'
  },

  initialize: function (options) {
    options = options || {};
    this.listAll = false || options.listAll;
  },

  render: function () {
    this.$el.html(this.template({
      tags: this.collection,
      listAll: this.listAll
    }));
    return this;
  },

  visitTag: function (event) {
    var tagID = $(event.currentTarget).data('id');
    Backbone.history.navigate('/tags/' + tagID, { trigger: true });
  }
});
