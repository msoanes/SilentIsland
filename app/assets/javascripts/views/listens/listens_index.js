SilentIsland.Views.ListensIndex = Backbone.CompositeView.extend(
  _.extend({}, SilentIsland.Mixins.Scrollable, {
  template: JST['listens/index'],

  scrollParams: {
    view: 'ListensIndexItem',
    listSelector: '.listens-list',
    itemsCallback: function () {
      this.$('abbr.timeago').timeago();
    }
  },

  initialize: function () {
    this.listenTo(this.collection, 'reset', this.addItems);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    this.listenForScroll();
    return this;
  }
}));
