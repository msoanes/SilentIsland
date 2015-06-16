SilentIsland.Views.SearchBar = Backbone.CompositeView.extend({
  template: JST['other/searchbar'],

  render: function () {
    var view = this;
    view.$el.html(view.template());
    view.$('input').categoryComplete({
      source: function(term, callback) {
        $.getJSON('api/searches', { q: term.term }, callback);
      },

      minLength: 1,

      select: function (event, ui) {
        var tagId = ui.item.id;
        Backbone.history.navigate(ui.item.category + '/' + ui.item.id, {trigger: true});
        $(this).val('');
        return false;
      }
    });
    return view;
  }
});
