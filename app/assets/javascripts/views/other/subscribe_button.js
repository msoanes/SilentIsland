SilentIsland.Views.SubscribeButton = SilentIslandBaseView.extend({
  template: JST['other/subscribe_button'],

  initialize: function () {
    this.listenTo(this.model.subscription(), 'change', this.render);
  },

  className: 'toggle-subscription',

  events: {
    'click': 'toggleSubscription'
  },


  toggleSubscription: function (event) {
    event.preventDefault();
    this.model.toggleSubscription();
  },

  render: function () {
    var renderedContent = this.template({
      subscription: this.model.subscription()
    });

    if (this.model.subscription().isNew()) {
      this.$el.removeClass('subscribed');
    } else {
      this.$el.addClass('subscribed');
    }
    this.$el.html(renderedContent);
    return this;
  }
})
