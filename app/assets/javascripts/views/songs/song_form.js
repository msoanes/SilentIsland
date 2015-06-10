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
    data.song.tag_labels = this.generateLabels(data.tag_string);
    delete data.tag_string;
    this.model.save(data, {
      success: view.submitSuccess.bind(view)
    });
  },

  submitSuccess: function (model) {
    this.collection.add(model);
    Backbone.history.navigate(
      '#/songs/' + model.get('id'),
      { trigger: true }
    );
  },

  generateLabels: function (tagString) {
    var tagList = tagString.split(',');
    return _(tagList).map(function (tagLabel) {
      return tagLabel.trim();
    });
  }
});
