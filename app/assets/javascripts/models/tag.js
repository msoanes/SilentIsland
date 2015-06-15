SilentIsland.Models.Tag = Backbone.Model.extend(
  _.extend({},
    SilentIsland.Mixins.Subscribable,
    SilentIsland.Mixins.SongIndexable, {
      urlRoot: '/api/tags',

      subscribableOptions: {
        foreignKey: "subscribable_id",
        subscribableType: 'Tag'
      },

      indexableOptions: {
        routeName: 'tag'
      }
    }
  )
);
