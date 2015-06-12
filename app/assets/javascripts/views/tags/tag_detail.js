SilentIsland.Views.TagDetail = Backbone.CompositeView.extend(
  _.extend({}, SilentIsland.Mixins.SongCollectionView, {
    template: JST['tags/detail']
  })
);
