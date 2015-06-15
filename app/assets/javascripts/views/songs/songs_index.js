SilentIsland.Views.SongsIndex = Backbone.CompositeView.extend(
  _.extend({}, SilentIsland.Mixins.Scrollable, {

  template: JST['songs/index'],

  scrollParams: {
    view: 'SongsIndexItem',
    listSelector: '.songs-list'
  },

  initialize: function (options) {
    this.addItems();
    this.listenTo(this.collection, 'add', this.addItem);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    this.listenForScroll();
    return this;
  }
}));
