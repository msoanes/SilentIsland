SilentIslandBaseView = Backbone.View.extend({
  transitionIn: function (callback) {
    var view = this;

    var animateIn = function () {
      view.$el.addClass('visible');
      view.$el.one('transitionend', function () {
        callback && callback();
      });
    };

    _.delay(animateIn, 20);
  },

  transitionOut: function (callback) {
    var view = this;

    view.$el.removeClass('visible');
    view.$el.one('transitionend', function () {
      callback && callback();
    });

  },

  transitionRender: function (options) {
    options = options || {};
    if (options.page === true) {
      this.$el.addClass('page');
    }
    return this.render();
  }
});
