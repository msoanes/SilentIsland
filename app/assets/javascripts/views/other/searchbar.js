SilentIsland.Views.SearchBar = Backbone.CompositeView.extend({
  template: JST['other/searchbar'],

  render: function () {
    this.$el.html(this.template());
    this.$('input').autocomplete({
      source: function(term, callback) {
        $.getJSON('api/tags', { q: term.term }, callback);
      },

      minLength: 2,

      select: function (event, ui) {
        var tagId = ui.item.id;
        Backbone.history.navigate('/tags/' + ui.item.id, {trigger: true});
      }
    });
    return this;
  }
});
