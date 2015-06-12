SilentIsland.Views.SubscribeButton = Backbone.View.extend({
  template: JST['other/subscribe_button'],

  initialize: function () {
    this.listenTo(this.model.subscription(), 'change', this.render);
  },

  events: {
    'click .toggle-subscription': 'toggleSubscription'
  },


  toggleSubscription: function (event) {
    console.log('Toggling')
    event.preventDefault();
    this.model.toggleSubscription();
  },

  render: function () {
    var renderedContent = this.template({
      subscription: this.model.subscription()
    });

    this.$el.html(renderedContent);
    return this;
  }
})
