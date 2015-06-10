SilentIsland.Views.SongForm = Backbone.View.extend({
  template: JST['songs/form'],

  initialize: function (options) {
    this.title = options.title;
  },

  events: {
    'submit form': 'submit'
  },

  render: function () {
    this.$el.html(this.template({
      title: this.title,
      song: this.model
    }));
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var view = this;
    var data = this.$('form').serializeJSON();
    this.model.save(data, {
      success: view.submitSuccess
    });
  },

  submitSuccess: function (model) {
    Backbone.history.navigate(
      '#/songs/' + model.get('id'),
      { trigger: true }
    );
  }
})
