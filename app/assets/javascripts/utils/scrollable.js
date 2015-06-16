SilentIsland.Mixins.Scrollable = {
  listenForScroll: function () {
    $(window).off('scroll');
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on('scroll', throttledCallback);
  },

  nextPage: function () {
    var view = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (view.collection.page_number < view.collection.total_pages) {
        view.collection.fetch({
          data: { page: view.collection.page_number + 1 },
          success: view.addItems.bind(view),
        });
      }
    }
  },

  addItems: function () {
    var indexView = this;
    indexView.collection.each(function (listen) {
      indexView.addItem(listen);
    });
    this.scrollParams.itemsCallback &&
      this.scrollParams.itemsCallback.call(this);
  },

  addItem: function (listen) {
    var indexItemView = new SilentIsland.Views[this.scrollParams.view]({
      model: listen
    });
    this.addSubview(this.scrollParams.listSelector, indexItemView);
    this.onRender();
  }
}
