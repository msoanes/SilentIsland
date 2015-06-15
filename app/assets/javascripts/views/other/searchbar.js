SilentIsland.Views.SearchBar = Backbone.CompositeView.extend({
  template: JST['other/searchbar'],

  render: function () {
    var view = this;
    view.$el.html(view.template());
    view.$('input').autocomplete({
      source: function(term, callback) {
        function parse(response) {
          callback(response.models);
        }
        $.getJSON('api/tags', {
          q: term.term,
          per: 10}, parse);
      },

      minLength: 2,

      select: function (event, ui) {
        var tagId = ui.item.id;
        Backbone.history.navigate('/tags/' + ui.item.id, {trigger: true});
        $(this).val('');
        return false;
      }
    });
    return view;
  }
});
