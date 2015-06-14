SilentIsland.Models.Song = Backbone.Model.extend({
  urlRoot: '/api/songs',

  commaSepTags: function () {
    var escapedTags =  _.map(this.get('tags'), function (tag) {
      console.log(tag);
      return _.escape(tag.label);
    });
    console.log(escapedTags);
    return escapedTags.join(',');
  }
});
