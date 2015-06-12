SilentIsland.Views.UserDetail = Backbone.CompositeView.extend(
  _.extend({}, SilentIsland.Mixins.SongCollectionView, {
    template: JST['users/detail']
  })
);
