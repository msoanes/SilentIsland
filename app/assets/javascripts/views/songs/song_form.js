SilentIsland.Views.SongForm = Backbone.View.extend({
  template: JST['songs/form'],

  initialize: function (options) {
    this.title = options.title;
    this.data = { song: {} };
  },

  events: {
    'click button.song-upload': 'uploadSong',
    'submit form': 'submit',
  },

  render: function () {
    this.$el.html(this.template({
      title: this.title,
      song: this.model
    }));
    this.$('#tag-labels').tagit();
    return this;
  },

  uploadSong: function (event) {
    event.preventDefault();
    var view = this;
    filepicker.pick(function (blob) {
      view.data.song.url = blob.url;
    });
  },

  submit: function (event) {
    var view = this;
    event.preventDefault();

    var data = view.$('form').serializeJSON();
     _.extend(view.data.song, data.song);

    var tag_labels = view.generateLabels(data.tag_string);
    tag_labels && (view.data.song.tag_labels = tag_labels);

    view.model.save(view.data, {
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
    if (!tagString) { return; }
    var tagList = tagString.split(',');
    return _(tagList).map(function (tagLabel) {
      return tagLabel.trim();
    });
  }
});
