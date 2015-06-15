SilentIsland.Models.Song = Backbone.Model.extend({
  urlRoot: '/api/songs',

  commaSepTags: function () {
    var escapedTags =  _.map(this.get('tags'), function (tag) {
      return _.escape(tag.label);
    });
    return escapedTags.join(',');
  }
});
