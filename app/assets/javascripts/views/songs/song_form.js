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
    var view = this;
    event.preventDefault();

    var data = this.$('form').serializeJSON();
    data.test = "whatever"
    var modelTest = new SilentIsland.Models.Song(data);
    debugger;
    modelTest.save([], {
      success: view.submitSuccess.bind(view)
    });
  },

  submitSuccess: function (model) {
    this.collection.add(model);
    Backbone.history.navigate(
      '#/songs/' + model.get('id'),
      { trigger: true }
    );
  }
})
