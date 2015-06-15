SilentIsland.Views.ListensIndex = Backbone.CompositeView.extend({
  template: JST['listens/index'],

  initialize: function () {
    this.addListens();
    this.listenTo(this.collection, 'add', this.addListen);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  addListens: function () {
    var indexView = this;
    indexView.collection.each(function (listen) {
      indexView.addListen(listen);
    });
  },

  addListen: function (listen) {
    var listensIndexItem = new SilentIsland.Views.ListensIndexItem({
      model: listen
    });
    this.addSubview('.listens-list', listensIndexItem);
  }
});
