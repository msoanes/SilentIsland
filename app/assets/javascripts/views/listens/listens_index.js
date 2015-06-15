SilentIsland.Views.ListensIndex = Backbone.CompositeView.extend({
  template: JST['listens/index'],

  initialize: function () {
    this.listenTo(this.collection, 'reset', this.addListens);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    this.listenForScroll();
    return this;
  },

  listenForScroll: function () {
    $(window).off('scroll');
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on('scroll', throttledCallback);
  },

  nextPage: function () {
    var view = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      console.log(view.collection.page_number);
      console.log(view.collection.total_pages);
      if (view.collection.page_number < view.collection.total_pages) {
        view.collection.fetch({
          data: {page: view.collection.page_number + 1 },
          success: view.addListens.bind(this)
        });
      }
    }
  },

  addListens: function () {
    var indexView = this;
    indexView.collection.each(function (listen) {
      indexView.addListen(listen);
    });
    this.$('abbr.timeago').timeago();
  },

  addListen: function (listen) {
    var listensIndexItem = new SilentIsland.Views.ListensIndexItem({
      model: listen
    });
    this.addSubview('.listens-list', listensIndexItem);
  }
});
